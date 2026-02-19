import type { Hadith } from '../entities/hadith.entity';

export interface HadithRepositoryPort {
  getDaily(language: string, dayKey: number): Promise<Hadith | null>;
}
