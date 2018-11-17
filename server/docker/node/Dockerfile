# multi-stage 1

FROM node:8.11.4-alpine as vendor

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./server/package.json /usr/src/app/package.json
ADD ./server/yarn.lock /usr/src/app/yarn.lock

RUN yarn install

# multi-stage 2

FROM node:8.11.4-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ADD ./server/. /usr/src/app/
