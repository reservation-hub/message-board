FROM node:14

WORKDIR /app

COPY .env.production .env.production

COPY app/server .

COPY scripts/server /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]