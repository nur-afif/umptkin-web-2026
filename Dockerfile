FROM node:20-alpine

WORKDIR /repo
COPY package.json package-lock.json turbo.json ./
COPY apps/web/package.json apps/web/package.json
COPY apps/server/package.json apps/server/package.json
COPY packages ./packages

RUN npm install

COPY . .

WORKDIR /repo/apps/web

EXPOSE 3001
CMD ["npm", "run", "dev"]
