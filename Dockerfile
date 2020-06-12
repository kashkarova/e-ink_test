FROM node:latest AS build

WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./
COPY --from=build /app/src/index.html ./