# TS bar
This is a website used for trasferring secret developed by Zhekun(Vincent) Ren as a developer of Lyra Education, using ReactJS, NodeJS, TypeScript, Postgres and Webpack
This project is tested by Jest and Postman, deployed using Docker, shell and AWS(ECS Fargate)
Whole service is deployed on AWS(database, backend and frontend)

## Project Demo
There is no demo for this project now, because the certificate manager spending, this project has already handled to Lyra Education

## Installation

```bash
cd server
npm install
cd ..
cd reactui
npm install
```

## Production mode running

1. directly running /server/builddocker.sh would generate the docker image and running it on port 8080
2. running /reactui/builddocker to generate the docker image and running it

OR

```bash
cd server
npm run start
cd ..
cd reactui
npm run start
```

## Dev mode running

```bash
cd server
npm run devstart
cd ..
cd reactui
npm run devstart
```
