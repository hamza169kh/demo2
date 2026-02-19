import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GetAyahReaderUseCase } from '../../application/use-cases/get-ayah-reader.use-case';

@Controller('quran')
export class QuranController {
  constructor(private readonly getAyahReaderUseCase: GetAyahReaderUseCase) {}

  @Get('surah/:surah')
  getBySurah(@Param('surah', ParseIntPipe) surah: number) {
    return this.getAyahReaderUseCase.execute(surah);
  }
}
