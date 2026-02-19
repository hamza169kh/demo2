import { IsString, MaxLength, MinLength } from 'class-validator';

export class AskCompanionDto {
  @IsString()
  @MinLength(3)
  @MaxLength(500)
  question!: string;

  @IsString()
  language!: string;
}
