FROM node:21
WORKDIR /GramaphoneStore/backend
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./
CMD ["npm", "run","dev"]