import { Injectable } from '@nestjs/common';
import type { Hadith } from '../../domain/entities/hadith.entity';

@Injectable()
export class HadithRepository {
  async getDaily(language: string, dayKey: number): Promise<Hadith | null> {
    const text =
      language === 'ar'
        ? 'إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ'
        : 'Actions are judged by intentions.';
    return {
      id: `20000000-0000-0000-0000-${String(dayKey).padStart(12, '0')}`,
      source: 'Sahih al-Bukhari',
      reference: '1',
      grade: 'Sahih',
      text,
      language,
      tags: ['intention'],
    };
  }
}
