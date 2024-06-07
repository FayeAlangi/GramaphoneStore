FROM node:22-alpine
WORKDIR /GramaphoneStore/backend
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5555
CMD ["npm", "run","dev"]