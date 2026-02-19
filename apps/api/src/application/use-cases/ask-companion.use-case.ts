import { Injectable } from '@nestjs/common';
import type { RagResponse } from '@ramadan/types';
import { RagPipelineService } from '../../infrastructure/ai/rag-pipeline.service';

@Injectable()
export class AskCompanionUseCase {
  constructor(private readonly ragPipelineService: RagPipelineService) {}

  execute(question: string, language: string): Promise<RagResponse> {
    return this.ragPipelineService.answer(question, language);
  }
}
