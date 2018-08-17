FROM nginx:1.13
COPY  dist/openebsworkloads /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf