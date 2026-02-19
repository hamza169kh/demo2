import { Injectable } from '@nestjs/common';
import type {
  AsrMethod,
  HighLatitudeRule,
  PrayerMethodKey,
} from '@ramadan/types';
import { PRAYER_METHODS } from '@ramadan/shared/src/constants';

type Coords = { latitude: number; longitude: number; timezone: number };

export interface PrayerInput {
  date: Date;
  coords: Coords;
  method: PrayerMethodKey;
  asrMethod: AsrMethod;
  highLatitudeRule: HighLatitudeRule;
}

export interface PrayerTimes {
  fajr: Date;
  sunrise: Date;
  dhuhr: Date;
  asr: Date;
  maghrib: Date;
  isha: Date;
}

@Injectable()
export class PrayerTimeService {
  calculate(input: PrayerInput): PrayerTimes {
    const day = this.julianDay(input.date, input.coords.timezone);
    const declination = this.sunDeclination(day);
    const eqt = this.equationOfTime(day);
    const noon = 12 + input.coords.timezone - input.coords.longitude / 15 - eqt;

    const method = PRAYER_METHODS[input.method];
    const sunrise = noon - this.hourAngle(input.coords.latitude, declination, -0.833);
    const sunset = noon + this.hourAngle(input.coords.latitude, declination, -0.833);

    const fajrAngle = -method.fajrAngle;
    const fajrRaw = noon - this.hourAngle(input.coords.latitude, declination, fajrAngle);
    const asrFactor = input.asrMethod === 'HANAFI' ? 2 : 1;
    const asrRaw = noon + this.asrHourAngle(input.coords.latitude, declination, asrFactor);

    const nightDuration = sunset <= sunrise ? 24 - sunrise + sunset : sunset - sunrise;

    const highAdjustedFajr = this.adjustHighLatitude(
      fajrRaw,
      sunrise,
      nightDuration,
      method.fajrAngle,
      input.highLatitudeRule,
      true,
    );

    const ishaRaw =
      method.ishaIntervalMinutes !== undefined
        ? sunset + method.ishaIntervalMinutes / 60
        : noon + this.hourAngle(input.coords.latitude, declination, -(method.ishaAngle ?? 17));

    const highAdjustedIsha = this.adjustHighLatitude(
      ishaRaw,
      sunset,
      nightDuration,
      method.ishaAngle ?? 17,
      input.highLatitudeRule,
      false,
    );

    return {
      fajr: this.floatToDate(input.date, highAdjustedFajr, input.coords.timezone),
      sunrise: this.floatToDate(input.date, sunrise, input.coords.timezone),
      dhuhr: this.floatToDate(input.date, noon, input.coords.timezone),
      asr: this.floatToDate(input.date, asrRaw, input.coords.timezone),
      maghrib: this.floatToDate(input.date, sunset, input.coords.timezone),
      isha: this.floatToDate(input.date, highAdjustedIsha, input.coords.timezone),
    };
  }

  private adjustHighLatitude(
    prayerTime: number,
    pivotTime: number,
    nightDuration: number,
    angle: number,
    rule: HighLatitudeRule,
    isFajr: boolean,
  ): number {
    const portion =
      rule === 'SEVENTH' ? 1 / 7 : rule === 'MIDDLE_OF_THE_NIGHT' ? 1 / 2 : angle / 60;
    const maxDistance = nightDuration * portion;
    if (isFajr) {
      return Math.max(prayerTime, pivotTime - maxDistance);
    }
    return Math.min(prayerTime, pivotTime + maxDistance);
  }

  private julianDay(date: Date, timezone: number): number {
    const utc = date.getTime() - timezone * 3600000;
    return utc / 86400000 + 2440587.5;
  }

  private sunDeclination(jd: number): number {
    const d = jd - 2451545.0;
    const g = this.deg2rad((357.529 + 0.98560028 * d) % 360);
    const q = (280.459 + 0.98564736 * d) % 360;
    const l = this.deg2rad((q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) % 360);
    const e = this.deg2rad(23.439 - 0.00000036 * d);
    return this.rad2deg(Math.asin(Math.sin(e) * Math.sin(l)));
  }

  private equationOfTime(jd: number): number {
    const d = jd - 2451545.0;
    const g = this.deg2rad((357.529 + 0.98560028 * d) % 360);
    const q = (280.459 + 0.98564736 * d) % 360;
    const l = this.deg2rad((q + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) % 360);
    const e = this.deg2rad(23.439 - 0.00000036 * d);
    const ra = this.rad2deg(Math.atan2(Math.cos(e) * Math.sin(l), Math.cos(l))) / 15;
    return q / 15 - this.fixHour(ra);
  }

  private hourAngle(latitude: number, declination: number, angle: number): number {
    const lat = this.deg2rad(latitude);
    const dec = this.deg2rad(declination);
    const ang = this.deg2rad(angle);
    const cosH =
      (Math.sin(ang) - Math.sin(lat) * Math.sin(dec)) /
      (Math.cos(lat) * Math.cos(dec));
    return this.rad2deg(Math.acos(cosH)) / 15;
  }

  private asrHourAngle(latitude: number, declination: number, factor: number): number {
    const lat = this.deg2rad(latitude);
    const dec = this.deg2rad(declination);
    const angle = -this.rad2deg(Math.atan(1 / (factor + Math.tan(Math.abs(lat - dec)))));
    return this.hourAngle(latitude, declination, angle);
  }

  private floatToDate(baseDate: Date, hours: number, timezone: number): Date {
    const normalized = this.fixHour(hours);
    const utcHours = normalized - timezone;
    const ms = Math.round(utcHours * 3600000);
    const midnight = Date.UTC(
      baseDate.getUTCFullYear(),
      baseDate.getUTCMonth(),
      baseDate.getUTCDate(),
    );
    return new Date(midnight + ms);
  }

  private fixHour(hour: number): number {
    return ((hour % 24) + 24) % 24;
  }

  private deg2rad(deg: number): number {
    return (deg * Math.PI) / 180;
  }

  private rad2deg(rad: number): number {
    return (rad * 180) / Math.PI;
  }
}
