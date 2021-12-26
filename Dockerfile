FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
ENV GITHUB_TOKEN=""
CMD [ "node", "index.js" ]