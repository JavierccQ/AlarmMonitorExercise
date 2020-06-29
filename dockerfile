FROM mhart/alpine-node:11 

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "yarn", "start" ]