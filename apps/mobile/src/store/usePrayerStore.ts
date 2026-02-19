import { create } from 'zustand';
import type { AsrMethod, HighLatitudeRule, PrayerMethodKey } from '@ramadan/types';

interface PrayerPreferences {
  method: PrayerMethodKey;
  asrMethod: AsrMethod;
  highLatitudeRule: HighLatitudeRule;
  adhanEnabled: boolean;
}

interface PrayerState {
  preferences: PrayerPreferences;
  setPreferences: (next: Partial<PrayerPreferences>) => void;
}

export const usePrayerStore = create<PrayerState>((set) => ({
  preferences: {
    method: 'MWL',
    asrMethod: 'STANDARD',
    highLatitudeRule: 'MIDDLE_OF_THE_NIGHT',
    adhanEnabled: true,
  },
  setPreferences: (next) =>
    set((state) => ({ preferences: { ...state.preferences, ...next } })),
}));
