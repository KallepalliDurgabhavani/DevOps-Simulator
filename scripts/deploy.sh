#!/bin/bash

if [ "$ENV" == "production" ]; then
  echo "Deploying production"
else
  echo "Deploying development"
fi
