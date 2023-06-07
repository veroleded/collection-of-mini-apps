FROM node

WORKDIR /web-app

COPY package.json /web-app

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]