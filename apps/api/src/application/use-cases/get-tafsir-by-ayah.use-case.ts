import { Injectable } from '@nestjs/common';
import { TafsirRepository } from '../../infrastructure/repositories/tafsir.repository';

@Injectable()
export class GetTafsirByAyahUseCase {
  constructor(private readonly tafsirRepository: TafsirRepository) {}

  execute(ayahId: string) {
    return this.tafsirRepository.listByAyahId(ayahId);
  }
}
