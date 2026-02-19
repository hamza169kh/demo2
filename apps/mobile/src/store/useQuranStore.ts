import { create } from 'zustand';

interface AyahBookmark {
  ayahId: string;
  note?: string;
  highlighted: boolean;
}

interface QuranState {
  selectedSurah: number;
  bookmarks: AyahBookmark[];
  setSelectedSurah: (surah: number) => void;
  toggleBookmark: (ayahId: string) => void;
  setNote: (ayahId: string, note: string) => void;
}

export const useQuranStore = create<QuranState>((set) => ({
  selectedSurah: 1,
  bookmarks: [],
  setSelectedSurah: (selectedSurah: number) => set({ selectedSurah }),
  toggleBookmark: (ayahId: string) =>
    set((state) => {
      const exists = state.bookmarks.find((bookmark) => bookmark.ayahId === ayahId);
      if (exists) {
        return {
          bookmarks: state.bookmarks.filter((bookmark) => bookmark.ayahId !== ayahId),
        };
      }
      return { bookmarks: [...state.bookmarks, { ayahId, highlighted: false }] };
    }),
  setNote: (ayahId: string, note: string) =>
    set((state) => ({
      bookmarks: state.bookmarks.map((bookmark) =>
        bookmark.ayahId === ayahId ? { ...bookmark, note } : bookmark,
      ),
    })),
}));
