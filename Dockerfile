ARG NODE_VERSION=20.12.2
ARG NODE_ENV=production

# base
FROM node:${NODE_VERSION}-alpine AS base

# dependencies
FROM base AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# build
FROM base AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=${NODE_ENV}
ENV ASTRO_TELEMETRY_DISABLED=1
RUN npm run build

# run
FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
