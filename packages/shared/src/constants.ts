import type { PrayerMethodKey, PrayerMethodAngles } from '@ramadan/types';

export const PRAYER_METHODS: Record<PrayerMethodKey, PrayerMethodAngles> = {
  MWL: { fajrAngle: 18, ishaAngle: 17 },
  UMM_AL_QURA: { fajrAngle: 18.5, ishaIntervalMinutes: 90 },
  EGYPT: { fajrAngle: 19.5, ishaAngle: 17.5 },
  ISNA: { fajrAngle: 15, ishaAngle: 15 },
  KARACHI: { fajrAngle: 18, ishaAngle: 18 },
};
