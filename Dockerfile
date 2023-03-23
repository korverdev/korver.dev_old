FROM node AS build

COPY package-lock.json .
RUN npm ci --ignore-scripts --no-audit --omit=optional --progress=false

COPY . .
RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /_site/ /usr/share/nginx/html/

EXPOSE 80
