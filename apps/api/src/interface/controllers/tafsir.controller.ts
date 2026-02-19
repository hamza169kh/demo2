import { Controller, Get, Param } from '@nestjs/common';
import { GetTafsirByAyahUseCase } from '../../application/use-cases/get-tafsir-by-ayah.use-case';

@Controller('tafsir')
export class TafsirController {
  constructor(private readonly getTafsirByAyahUseCase: GetTafsirByAyahUseCase) {}

  @Get(':ayahId')
  byAyah(@Param('ayahId') ayahId: string) {
    return this.getTafsirByAyahUseCase.execute(ayahId);
  }
}
