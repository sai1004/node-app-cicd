FROM node:18-alpine

WORKDIR /node

COPY . .

RUN npm install

EXPOSE 6000

CMD ["node", "src/index.js" ]