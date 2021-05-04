#!/bin/bash
echo "Running in NODE_ENV=$NODE_ENV COMMAND=$COMMAND"

echo "Running yarn install ..."
yarn install

echo "Running yarn run $COMMAND ..."
yarn $COMMAND