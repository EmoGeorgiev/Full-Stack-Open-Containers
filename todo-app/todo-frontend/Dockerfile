FROM node:24 AS test-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm test


FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY --from=test-stage /usr/src/app /usr/src/app

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run build

RUN npm install -g serve

EXPOSE 5176

CMD ["serve", "-s", "dist", "-l", "5176"]
