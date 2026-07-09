FROM node:24

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm run build

RUN npm install -g serve

EXPOSE 5176

CMD ["serve", "-s", "dist", "-l", "5176"]
