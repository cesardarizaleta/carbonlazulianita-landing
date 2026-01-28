FROM nginx:alpine

# Use our nginx config which listens on 8888
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy site static files
COPY . /usr/share/nginx/html

EXPOSE 8888

CMD ["nginx", "-g", "daemon off;"]
