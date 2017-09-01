FROM abiosoft/caddy

ENV CADDY_BACKEND http://localhost

COPY Caddyfile /etc/Caddyfile
COPY dist /srv