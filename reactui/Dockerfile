FROM node:14.8.0-alpine

RUN mkdir -p /barproject/reactui
WORKDIR /barproject/reactui

ENV PATH /barproject/reactui/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

CMD ["npm","run","expressstart"]