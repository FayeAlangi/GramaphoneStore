FROM node:22-alpine

WORKDIR /GramaphoneStore/frontend

COPY package*.json .

RUN npm install

COPY . .
EXPOSE 3000

CMD [ "npm", "run", "dev" ]