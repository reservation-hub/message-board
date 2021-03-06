FROM node:14

WORKDIR /app/server

COPY ./app/server .

COPY ./scripts/server /scripts

RUN chmod +x /scripts/*

ENTRYPOINT [ "/scripts/entrypoint.sh" ]