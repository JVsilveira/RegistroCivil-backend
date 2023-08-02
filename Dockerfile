FROM node:18


WORKDIR /usr/src/app


COPY package*.json ./


RUN yarn install


COPY . .


COPY .env ./


EXPOSE 3000


CMD ["yarn", "start"]