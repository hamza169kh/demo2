import { Body, Controller, Post } from '@nestjs/common';
import { PrayerRequestDto } from '../../application/dto/prayer-request.dto';
import { PrayerTimeService } from '../../domain/services/prayer-time.service';

@Controller('prayer-times')
export class PrayerController {
  constructor(private readonly prayerTimeService: PrayerTimeService) {}

  @Post('calculate')
  calculate(@Body() dto: PrayerRequestDto) {
    return this.prayerTimeService.calculate({
      date: new Date(dto.date),
      coords: {
        latitude: dto.latitude,
        longitude: dto.longitude,
        timezone: dto.timezone,
      },
      method: dto.method,
      asrMethod: dto.asrMethod,
      highLatitudeRule: dto.highLatitudeRule,
    });
  }
}
