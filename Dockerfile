FROM nginx:alpine

# Borrar la configuración por defecto para evitar conflictos
RUN rm /etc/nginx/conf.d/default.conf

# Copiar tu config que escucha en 8888
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copiar archivos estáticos
COPY . /usr/share/nginx/html

EXPOSE 8888

CMD ["nginx", "-g", "daemon off;"]