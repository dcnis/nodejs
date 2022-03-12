FROM node:16.14.0-slim
WORKDIR /usr/src/app

COPY package*.json .
RUN npm install

COPY ./src ./src

EXPOSE 3000 9229
CMD [ "npm", "start"]