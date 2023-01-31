#!/bin/bash

pm2 stop LabFront
git reset --hard HEAD
git pull
npm run build
pm2 serve build/ 3000 --name "LabFront" --spa
