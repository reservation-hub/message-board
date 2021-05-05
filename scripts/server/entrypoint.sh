#!/bin/bash
if [ "$NODE_ENV" = "development" ]; then
cp -f .env.development .env
elif [ "$NODE_ENV" = "production" ]; then
cp -f .env.production .env
fi

echo "Running in NODE_ENV=$NODE_ENV COMMAND=$COMMAND"

echo "Running npm install ..."
npm install --prefer-offline --no-audit
ls -alh
echo "Running npm run $COMMAND ..."
npm run $COMMAND