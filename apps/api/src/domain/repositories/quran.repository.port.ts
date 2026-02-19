import type { QuranAyah } from '../entities/quran-ayah.entity';

export interface QuranRepositoryPort {
  listBySurah(surah: number): Promise<QuranAyah[]>;
}
