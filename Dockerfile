FROM node:24-alpine

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js
COPY index.html index.html

RUN npm install

CMD ["node", "index"]