FROM node:18 as ts-builder

WORKDIR /build

COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci

COPY src/ ./src
RUN npm run build


FROM node:18

ARG PORT="8002"
ENV PORT=${PORT}
WORKDIR /usr/src/app

COPY package*.json ./
COPY src/ ./src
COPY --from=ts-builder /build/src ./src

RUN npm install --production

EXPOSE ${PORT}
CMD ["npm", "run", "start"]
