import { Injectable } from '@nestjs/common';
import { HadithRepository } from '../../infrastructure/repositories/hadith.repository';

@Injectable()
export class GetDailyHadithUseCase {
  constructor(private readonly hadithRepository: HadithRepository) {}

  execute(language: string, dayKey: number) {
    return this.hadithRepository.getDaily(language, dayKey);
  }
}
