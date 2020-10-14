
FROM node:14.8.0-alpine AS build


RUN mkdir -p /barproject/reactui
WORKDIR /barproject/reactui

ENV PATH /barproject/reactui/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

RUN npm run build
#CMD ["npm","run","expressstart"]
#CMD ["npm","run","start"]

FROM nginx:stable-alpine
COPY --from=build /barproject/reactui/build /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY src/certificate /etc/ssl/certs/certificate
EXPOSE 443
CMD ["nginx","-g","daemon off;"]
