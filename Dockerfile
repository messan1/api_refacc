FROM node:10-alpine

RUN mkdir -p /usr/src/refacc_api

WORKDIR /usr/src/refacc_api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node","index.js" ]