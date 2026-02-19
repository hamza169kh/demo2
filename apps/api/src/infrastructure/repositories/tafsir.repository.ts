import { Injectable } from '@nestjs/common';
import type { TafsirText } from '../../domain/entities/tafsir.entity';

@Injectable()
export class TafsirRepository {
  async listByAyahId(ayahId: string): Promise<TafsirText[]> {
    return [
      {
        id: '10000000-0000-0000-0000-000000000001',
        ayahId,
        sourceKey: 'ibn-kathir',
        sourceName: 'Ibn Kathir',
        text: 'In the Name of Allah, the Most Gracious, the Most Merciful.',
        language: 'en',
      },
    ];
  }
}
