FROM node:latest as devapp
WORKDIR /app
COPY package.json ./
RUN npm install --silent
COPY . .
EXPOSE 8000
CMD npm run start


