import { Injectable } from '@nestjs/common';
import { QuranRepository } from '../../infrastructure/repositories/quran.repository';

@Injectable()
export class GetAyahReaderUseCase {
  constructor(private readonly quranRepository: QuranRepository) {}

  execute(surah: number) {
    return this.quranRepository.listBySurah(surah);
  }
}
