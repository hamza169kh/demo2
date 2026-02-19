# Ramadan AI Companion

## Deployment and Testing Guide

### 1) Prerequisites
- Node.js 20+
- pnpm 9+
- Docker + Docker Compose

### 2) Install dependencies
```bash
pnpm install
```

### 3) Configure environment
Create a `.env` file at repo root:

```env
DATABASE_URL=postgresql://ramadan:ramadan@localhost:5432/ramadan
REDIS_URL=redis://localhost:6379
MEILI_URL=http://localhost:7700
MEILI_MASTER_KEY=masterKey
```

### 4) Start infrastructure services
```bash
docker compose up -d postgres redis meilisearch
```

Verify services:
```bash
docker compose ps
```

### 5) Initialize database
Generate Prisma client:
```bash
pnpm --filter @apps/api exec prisma generate
```

Apply migrations (create migration if first time):
```bash
pnpm --filter @apps/api exec prisma migrate dev --name init
```

### 6) Run API (NestJS)
```bash
pnpm --filter @apps/api dev
```

API default URL:
- `http://localhost:3000`

### 7) Run Mobile (Expo)
```bash
pnpm --filter @apps/mobile dev
```

Then open Expo in iOS Simulator / Android Emulator / device.

---

## Docker-first deployment (API + infra)

Build and run everything from Compose:
```bash
docker compose up --build -d
```

Check logs:
```bash
docker compose logs -f api
```

Stop:
```bash
docker compose down
```

---

## Test Plan

### A) Static checks
```bash
pnpm lint
```

### B) API tests
```bash
pnpm --filter @apps/api test
```

### C) Manual API smoke tests

#### 1. Quran reader endpoint
```bash
curl http://localhost:3000/quran/surah/1
```

#### 2. Prayer time calculation endpoint
```bash
curl -X POST http://localhost:3000/prayer-times/calculate \
  -H "Content-Type: application/json" \
  -d '{
    "date": "2026-03-15T00:00:00.000Z",
    "latitude": 24.7136,
    "longitude": 46.6753,
    "timezone": 3,
    "method": "UMM_AL_QURA",
    "asrMethod": "STANDARD",
    "highLatitudeRule": "MIDDLE_OF_THE_NIGHT"
  }'
```

#### 3. AI companion endpoint (RAG schema with citations)
```bash
curl -X POST http://localhost:3000/ai-companion/ask \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What does Quran say about fasting in Ramadan?",
    "language": "en"
  }'
```

Expected shape:
```json
{
  "answer": "...",
  "citations": [
    {
      "type": "quran",
      "source": "Qur’an",
      "reference": "2:183"
    }
  ]
}
```

### D) Mobile verification checklist
- Qur’an reader screen loads.
- Prayer screen loads.
- Ramadan countdown screen loads.
- Reading tracker screen loads.
- AI companion screen loads.

---

## Production rollout checklist

- Set secure production secrets (`DATABASE_URL`, `MEILI_MASTER_KEY`, Redis auth).
- Run Prisma migration in CI/CD before API rollout.
- Add TLS termination (Nginx/ALB/Ingress).
- Configure API autoscaling and health checks.
- Enable centralized logs + metrics + alerting.
- Configure push notification credentials for iOS/Android.

---

## Useful commands

```bash
# Run full monorepo dev
pnpm dev

# Build all apps/packages
pnpm build

# Run all tests
pnpm test

# Run only API tests
pnpm --filter @apps/api test
```
