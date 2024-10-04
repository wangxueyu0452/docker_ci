FROM keymetrics/pm2:latest-apline
WORKDIR /usr/src/app
ADD . /usr/src/app/
RUN npm i
EXPOSE 3000
#pm2 在docker中使用的命令是pm2-docker
CMD [ "pm2-runtime", "start", "process.yml" ]