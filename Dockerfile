FROM nginx:1.13-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html