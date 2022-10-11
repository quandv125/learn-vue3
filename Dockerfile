FROM node:14-alpine
EXPOSE 4545
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli -g
RUN yarn install

CMD [ "yarn", "dev" ]