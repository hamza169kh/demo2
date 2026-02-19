import { Body, Controller, Post } from '@nestjs/common';
import { AskCompanionDto } from '../../application/dto/ask-companion.dto';
import { AskCompanionUseCase } from '../../application/use-cases/ask-companion.use-case';

@Controller('ai-companion')
export class AiController {
  constructor(private readonly askCompanionUseCase: AskCompanionUseCase) {}

  @Post('ask')
  ask(@Body() dto: AskCompanionDto) {
    return this.askCompanionUseCase.execute(dto.question, dto.language);
  }
}
