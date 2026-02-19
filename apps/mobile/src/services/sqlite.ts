import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('ramadan-ai.db');

export function initializeOfflineSchema(): void {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS quran_ayah (
      id TEXT PRIMARY KEY,
      surah INTEGER,
      ayah INTEGER,
      page INTEGER,
      juz INTEGER,
      hizb INTEGER,
      text_uthmani TEXT,
      text_simple TEXT
    );
    CREATE TABLE IF NOT EXISTS tafsir_text (
      id TEXT PRIMARY KEY,
      ayah_id TEXT,
      source_key TEXT,
      source_name TEXT,
      text TEXT,
      language TEXT
    );
    CREATE TABLE IF NOT EXISTS reading_progress (
      id TEXT PRIMARY KEY,
      user_id TEXT,
      date TEXT,
      ayah_start INTEGER,
      ayah_end INTEGER,
      pages_read INTEGER
    );
  `);
}
