FROM alpine:3.6
RUN apk update && apk upgrade && apk add nodejs yarn && rm -rf /var/cache/apk/*
COPY . /src
WORKDIR /src
RUN yarn install

EXPOSE 8080
CMD ["yarn", "start"]