FROM node:8.5.0
ADD . /usr/src/app
WORKDIR /usr/src/app
CMD [ "npm", "start" ]