FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 8081

CMD [ "node", "./bin/www" ]
