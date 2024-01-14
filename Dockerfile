# Build Stage
FROM node:16 as builder
WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build && rm -rf src

# Runtime Stage
FROM node:16.17.0-bullseye-slim
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY package*.json yarn.lock .env ./

RUN yarn --prod
RUN npx prisma generate
EXPOSE 8000
CMD ["node", "./dist/app.js"]