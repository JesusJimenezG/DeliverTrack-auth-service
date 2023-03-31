FROM node:18.15.0-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY delivertrack-middlewares-0.0.1.tgz ./
RUN npm install

# Copy Prisma schema
COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npx prisma generate

# Copy .env
COPY .env .env

# Bundle app source
COPY . .

EXPOSE 4000
CMD [ "npm", "run", "dev" ]