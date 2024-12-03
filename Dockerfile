FROM node:20-alpine AS base
WORKDIR /app

# 
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# 
FROM deps AS dev
COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
COPY public ./public
COPY .eslintrc.json next.config.ts postcss.config.mjs tailwind.config.ts tsconfig.json ./
CMD [ "yarn", "dev" ]