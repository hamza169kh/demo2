export interface CountdownResult {
  toIftarMs: number;
  toSuhoorEndMs: number;
}

export function calculateRamadanCountdown(
  now: Date,
  maghrib: Date,
  fajr: Date,
): CountdownResult {
  const toIftarMs = Math.max(maghrib.getTime() - now.getTime(), 0);
  const toSuhoorEndMs = Math.max(fajr.getTime() - now.getTime(), 0);
  return { toIftarMs, toSuhoorEndMs };
}
