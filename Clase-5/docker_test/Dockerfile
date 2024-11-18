FROM node:20.18.0
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8080
CMD ["node","app.js"]
