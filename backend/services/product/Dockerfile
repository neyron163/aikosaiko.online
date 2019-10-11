FROM node:10

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN npm install -g yarn
RUN yarn

COPY . .

EXPOSE 5432 4001

RUN yarn run build
RUN yarn run start