FROM node:18.15.0-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy Prisma schema
COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npx prisma generate

# Copy .env
COPY .env.dev .env.dev

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]