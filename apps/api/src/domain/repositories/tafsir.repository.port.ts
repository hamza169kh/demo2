import type { TafsirText } from '../entities/tafsir.entity';

export interface TafsirRepositoryPort {
  listByAyahId(ayahId: string): Promise<TafsirText[]>;
}
