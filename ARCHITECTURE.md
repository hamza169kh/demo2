# Ramadan AI Companion

## Monorepo Structure

```txt
/apps
  /api
    /src
      /domain
      /application
      /infrastructure
      /interface
    /test
  /mobile
    /src
      /navigation
      /screens
      /store
      /services
/packages
  /shared
  /types
  /utils
/prisma
```

## Implementation Phases

### Phase 1
- Qur’an reader (offline SQLite)
- Prayer calculation engine (local)
- Ramadan countdown
- Reading tracker baseline

### Phase 2
- Tafsir ingestion and tab selection
- Hadith daily rotation and filtering
- RAG AI companion with citation schema

### Phase 3
- Multi-language UX
- Offline tafsir packs
- Advanced analytics

## Example API Routes

```txt
GET    /quran/surah/:surah
POST   /prayer-times/calculate
POST   /ai-companion/ask
GET    /hadith/daily
GET    /tafsir/:ayahId
POST   /reading-progress
GET    /reading-progress/summary
```

## RAG Response Schema

```json
{
  "answer": "string",
  "citations": [
    {
      "type": "quran | tafsir | hadith",
      "source": "string",
      "reference": "string"
    }
  ]
}
```
