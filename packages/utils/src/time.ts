export const minutesToMs = (minutes: number): number => minutes * 60_000;

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
