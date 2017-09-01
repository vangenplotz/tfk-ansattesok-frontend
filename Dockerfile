FROM alpine:3.6
LABEL maintainer "Vangen&Plotz <post@vangenplotz.no>"

LABEL caddy_version="0.10.7" architecture="amd64"

ARG plugins=http.cache
ENV CADDY_BACKEND http://localhost

RUN apk add --no-cache tar curl \
 && curl --silent --show-error --fail --location \
      --header "Accept: application/tar+gzip, application/x-gzip, application/octet-stream" -o - \
      "https://caddyserver.com/download/linux/amd64?plugins=${plugins}" \
    | tar --no-same-owner -C /usr/bin/ -xz caddy \
 && chmod 0755 /usr/bin/caddy \
 && /usr/bin/caddy -version

EXPOSE 80
WORKDIR /srv



COPY Caddyfile /etc/Caddyfile
COPY dist /srv

ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]