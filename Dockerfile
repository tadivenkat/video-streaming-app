FROM node:18.17.1

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
COPY ./src ./src
COPY .env* ./
COPY ./videos ./videos
CMD npm start
