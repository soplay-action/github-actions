FROM oven/bun:alpine as base
FROM nginx:stable-alpine-slim as production

## 빌드 작업
FROM base as builder
WORKDIR /app

# 의존성 설치
COPY ./my-app/package.json ./my-app/bun.lockb* ./
RUN bun i

# 빌드 
COPY ./my-app .
RUN bun run build


## 프로덕션 이미지
FROM production as runner 

COPY --from=builder  /app/dist /usr/share/nginx/html

EXPOSE 80