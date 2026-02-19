FROM node:20-alpine
WORKDIR /app
COPY package.json turbo.json tsconfig.base.json ./
COPY apps/api/package.json apps/api/package.json
COPY packages/types/src packages/types/src
COPY packages/shared/src packages/shared/src
COPY packages/utils/src packages/utils/src
COPY prisma prisma
COPY apps/api/src apps/api/src
RUN npm install -g pnpm && pnpm install
WORKDIR /app/apps/api
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "dev"]
