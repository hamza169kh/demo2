export interface ReadingPlan {
  totalPages: number;
  days: number;
  dailyTarget: number;
}

export const buildReadingPlan = (totalPages: number, days: number): ReadingPlan => ({
  totalPages,
  days,
  dailyTarget: Math.ceil(totalPages / days),
});

export const progressPercentage = (
  pagesRead: number,
  totalPages: number,
): number => Math.min((pagesRead / totalPages) * 100, 100);
