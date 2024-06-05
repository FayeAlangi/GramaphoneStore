FROM node:18-alpine

WORKDIR /GramaphoneStore/frontend

COPY ./frontend/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]