FROM node:10-alpine

RUN mkdir -p /usr/src/refacc_api

WORKDIR /usr/src/refacc_api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm","start" ]