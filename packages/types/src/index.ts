export type CitationType = 'quran' | 'tafsir' | 'hadith';

export interface Citation {
  type: CitationType;
  source: string;
  reference: string;
}

export interface RagResponse {
  answer: string;
  citations: Citation[];
}

export interface PrayerMethodAngles {
  fajrAngle: number;
  ishaAngle?: number;
  ishaIntervalMinutes?: number;
}

export type PrayerMethodKey =
  | 'MWL'
  | 'UMM_AL_QURA'
  | 'EGYPT'
  | 'ISNA'
  | 'KARACHI';

export type AsrMethod = 'STANDARD' | 'HANAFI';

export type HighLatitudeRule = 'MIDDLE_OF_THE_NIGHT' | 'SEVENTH' | 'TWILIGHT_ANGLE';
