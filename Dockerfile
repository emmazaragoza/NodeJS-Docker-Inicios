FROM node:14

WORKDIR /app

COPY . .

RUN npm install 

CMD ["node", "/app/src/index.js"]
# CMD ["npm", "start"]