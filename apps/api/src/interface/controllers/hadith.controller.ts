import { Controller, Get, Query } from '@nestjs/common';
import { GetDailyHadithUseCase } from '../../application/use-cases/get-daily-hadith.use-case';

@Controller('hadith')
export class HadithController {
  constructor(private readonly getDailyHadithUseCase: GetDailyHadithUseCase) {}

  @Get('daily')
  daily(@Query('language') language = 'en') {
    const dayKey = new Date().getUTCDate();
    return this.getDailyHadithUseCase.execute(language, dayKey);
  }
}
