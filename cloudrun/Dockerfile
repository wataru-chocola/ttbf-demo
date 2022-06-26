FROM node:18 as ts-builder

WORKDIR /build

COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci

COPY src/ ./src
RUN npm run build


FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
COPY src/ ./src
COPY --from=ts-builder /build/src ./src

RUN npm install --production

EXPOSE 8002
CMD ["npm", "run", "start"]
