import { Injectable } from '@nestjs/common';
import { z } from 'zod';
import type { RagResponse } from '@ramadan/types';

interface RetrievedChunk {
  id: string;
  type: 'quran' | 'tafsir' | 'hadith';
  source: string;
  reference: string;
  content: string;
  score: number;
}

const RagResponseSchema = z.object({
  answer: z.string().min(1),
  citations: z
    .array(
      z.object({
        type: z.enum(['quran', 'tafsir', 'hadith']),
        source: z.string().min(1),
        reference: z.string().min(1),
      }),
    )
    .min(1),
});

@Injectable()
export class RagPipelineService {
  async answer(question: string, language: string): Promise<RagResponse> {
    const retrieved = await this.retrieve(question, language, 5);
    if (retrieved.length === 0) {
      return {
        answer: 'Insufficient evidence in verified sources for this question.',
        citations: [
          {
            type: 'tafsir',
            source: 'System',
            reference: 'INSUFFICIENT_EVIDENCE',
          },
        ],
      };
    }

    const answer = this.generateGuardedAnswer(question, retrieved);
    const citations = retrieved.slice(0, 3).map((chunk) => ({
      type: chunk.type,
      source: chunk.source,
      reference: chunk.reference,
    }));

    return RagResponseSchema.parse({ answer, citations });
  }

  private async retrieve(
    question: string,
    _language: string,
    topK: number,
  ): Promise<RetrievedChunk[]> {
    const corpus: RetrievedChunk[] = [
      {
        id: 'q-1',
        type: 'quran',
        source: 'Qur’an',
        reference: '2:183',
        content:
          'O you who have believed, fasting has been prescribed upon you as it was prescribed upon those before you that you may become righteous.',
        score: 0.96,
      },
      {
        id: 't-1',
        type: 'tafsir',
        source: 'Ibn Kathir',
        reference: '2:183',
        content: 'The verse establishes obligation of fasting in Ramadan for believers.',
        score: 0.89,
      },
      {
        id: 'h-1',
        type: 'hadith',
        source: 'Sahih al-Bukhari',
        reference: '1901',
        content: 'Whoever fasts Ramadan out of faith and seeking reward will be forgiven.',
        score: 0.87,
      },
    ];

    const isRelevant = (chunk: RetrievedChunk): boolean =>
      chunk.content.toLowerCase().includes(question.toLowerCase().split(' ')[0]) ||
      chunk.score > 0.85;

    return corpus.filter(isRelevant).slice(0, topK);
  }

  private generateGuardedAnswer(question: string, chunks: RetrievedChunk[]): string {
    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes('fiqh') || lowerQuestion.includes('halal')) {
      return 'Mainstream scholarly views differ by madhhab and evidences; consult qualified local scholars for legal rulings while considering the cited primary texts.';
    }

    if (chunks.length < 2) {
      return 'Insufficient evidence in verified sources for this question.';
    }

    return chunks
      .slice(0, 2)
      .map((chunk) => chunk.content)
      .join(' ');
  }
}
