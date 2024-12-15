FROM node:21-alpine

RUN ln -snf /usr/share/zoneinfo/Asia/Seoul /etc/localtime && echo "Asia/Seoul" > /etc/timezone

WORKDIR /src

COPY package.json package-lock.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "preview" ]
