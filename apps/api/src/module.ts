import { Module } from '@nestjs/common';
import { QuranController } from './interface/controllers/quran.controller';
import { PrayerController } from './interface/controllers/prayer.controller';
import { AiController } from './interface/controllers/ai.controller';
import { HadithController } from './interface/controllers/hadith.controller';
import { TafsirController } from './interface/controllers/tafsir.controller';
import { QuranRepository } from './infrastructure/repositories/quran.repository';
import { TafsirRepository } from './infrastructure/repositories/tafsir.repository';
import { HadithRepository } from './infrastructure/repositories/hadith.repository';
import { PrayerTimeService } from './domain/services/prayer-time.service';
import { GetAyahReaderUseCase } from './application/use-cases/get-ayah-reader.use-case';
import { AskCompanionUseCase } from './application/use-cases/ask-companion.use-case';
import { RagPipelineService } from './infrastructure/ai/rag-pipeline.service';
import { GetDailyHadithUseCase } from './application/use-cases/get-daily-hadith.use-case';
import { GetTafsirByAyahUseCase } from './application/use-cases/get-tafsir-by-ayah.use-case';

@Module({
  controllers: [
    QuranController,
    PrayerController,
    AiController,
    HadithController,
    TafsirController,
  ],
  providers: [
    QuranRepository,
    TafsirRepository,
    HadithRepository,
    PrayerTimeService,
    GetAyahReaderUseCase,
    AskCompanionUseCase,
    RagPipelineService,
    GetDailyHadithUseCase,
    GetTafsirByAyahUseCase,
  ],
})
export class AppModule {}
