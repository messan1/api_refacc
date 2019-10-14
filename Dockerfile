FROM node:10-alpine

RUN mkdir -p /usr/src/refacc_api

WORKDIR /usr/src/refacc_api

COPY package.json ./usr/src/refacc_api

RUN npm install

COPY . /usr/src/refacc_api

EXPOSE 3000

CMD [ "npm","start" ]