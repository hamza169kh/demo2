import { IsDateString, IsEnum, IsNumber, Max, Min } from 'class-validator';
import type {
  AsrMethod,
  HighLatitudeRule,
  PrayerMethodKey,
} from '@ramadan/types';

export class PrayerRequestDto {
  @IsDateString()
  date!: string;

  @IsNumber()
  @Min(-90)
  @Max(90)
  latitude!: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  longitude!: number;

  @IsNumber()
  @Min(-12)
  @Max(14)
  timezone!: number;

  @IsEnum(['MWL', 'UMM_AL_QURA', 'EGYPT', 'ISNA', 'KARACHI'])
  method!: PrayerMethodKey;

  @IsEnum(['STANDARD', 'HANAFI'])
  asrMethod!: AsrMethod;

  @IsEnum(['MIDDLE_OF_THE_NIGHT', 'SEVENTH', 'TWILIGHT_ANGLE'])
  highLatitudeRule!: HighLatitudeRule;
}
