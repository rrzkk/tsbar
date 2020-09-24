#FROM nginx
FROM node:14.8.0-alpine

RUN mkdir -p /barproject/server
WORKDIR /barproject/server

ENV PATH /barproject/server/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

CMD ["npm","start"]