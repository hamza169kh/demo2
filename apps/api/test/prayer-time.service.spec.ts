import { PrayerTimeService } from '../src/domain/services/prayer-time.service';

describe('PrayerTimeService', () => {
  it('calculates ordered daily prayer times', () => {
    const service = new PrayerTimeService();
    const result = service.calculate({
      date: new Date('2026-03-15T00:00:00Z'),
      coords: { latitude: 24.7136, longitude: 46.6753, timezone: 3 },
      method: 'UMM_AL_QURA',
      asrMethod: 'STANDARD',
      highLatitudeRule: 'MIDDLE_OF_THE_NIGHT',
    });

    expect(result.fajr.getTime()).toBeLessThan(result.sunrise.getTime());
    expect(result.sunrise.getTime()).toBeLessThan(result.dhuhr.getTime());
    expect(result.dhuhr.getTime()).toBeLessThan(result.maghrib.getTime());
  });
});
