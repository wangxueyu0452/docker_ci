FROM keymetrics/pm2:latest
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm i
EXPOSE 3000

CMD ["pm2-runtime", "start", "process.yml"]