# Deploy con Docker (puerto 8888)

Instrucciones rápidas para construir y ejecutar localmente:

1. Build de la imagen Docker:

```bash
docker build -t carbonlazulianita-landing .
```

2. Ejecutar el contenedor mapeando el puerto 8888:

```bash
docker run --rm -p 8888:8888 carbonlazulianita-landing
```

O con docker-compose:

```bash
docker-compose up --build
```

Notas para Dokploy / despliegue:
- La imagen expone el puerto `8888`. Configure Dokploy para usar la imagen construida o empuje la imagen a un registry.
- Si el servicio de despliegue espera el puerto 80, haga un mapping en la plataforma o ajuste el puerto interno.
