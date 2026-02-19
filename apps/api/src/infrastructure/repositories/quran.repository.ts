import { Injectable } from '@nestjs/common';
import type { QuranAyah } from '../../domain/entities/quran-ayah.entity';

@Injectable()
export class QuranRepository {
  async listBySurah(surah: number): Promise<QuranAyah[]> {
    return [
      {
        id: '00000000-0000-0000-0000-000000000001',
        surah,
        ayah: 1,
        page: 1,
        juz: 1,
        hizb: 1,
        textUthmani: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
        textSimple: 'Bismillāhi r-raḥmāni r-raḥīm',
      },
    ];
  }
}
