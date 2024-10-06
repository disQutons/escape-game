FROM node:18 as dev

WORKDIR /app

COPY package*.json ./

RUN npm install -g @angular/cli && npm install --legacy-peer-deps

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--hmr", "--poll=2000"]
