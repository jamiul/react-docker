FROM node:16-slim

# author
LABEL maintainer="Jamiul Alam<jamiulewu24@gmail.com>"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
# CMD ["npm", "start"]