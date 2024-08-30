# Ado - Servicios Backend

<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/testing-files-b4524.appspot.com/o/amarillos-logo.png?alt=media&token=3c210cbd-b9df-4b1e-907d-133a94769000" width="100%" alt="Amarillos de oro Logo" />
</p>

## Descripción
Si deseas explorar más acerca de Nest, puedes hacer clic en el siguiente enlace para acceder a su documentación oficial: [Nest](https://docs.nestjs.com/). También puedes consultar la documentación específica implementada por Ado: [Documentación](DOCUMENTATION.md).

## Instalación de Dependencias

```bash
$ npm install
```

## Variables de Entorno

`PORT`: Puerto en el que la aplicación se ejecutará. (Opcional)
`DB_URL`: Url de la base de datos postgres. (Requerido)
`DB_USERNAME`: El usuario de la base de datos. (Requerido)
`DB_PASSWORD`: Contraseña de la base de datos. (Requerido)
`DB_HOST`: La `URL` de Conexión a la **DB**. (Requerido)
`DB_NAME`: El nombre de la base de datos. (Requerido)

## Iniciar servicio de base de datos con Docker: Guía y comandos
1. Primero, asegúrate de tener instalado Docker en tu sistema. Si no lo tienes aqui te dejo el link de su pagina oficial [Docker's official website](https://www.docker.com/products/docker-desktop/)
2. Luego, ejecuta el siguiente comando para crear una imagen de la base de datos:
```bash
$ docker compose up -d
```

## Ejecución del Proyecto
# Se eligió yarn para asegurar la estabilidad y consistencia durante el despliegue en producción.

```bash
# Entorno de desarrollo
$ yarn run start

# Entorno de desarrollo en modo "watch" - Recomendado para desarrollo
$ yarn run start:dev

# Entorno de producción
$ yarn run start:prod
```

## Pruebas

```bash
# Pruebas unitarias
$ yarn run test

# Pruebas end-to-end
$ yarn run test:e2e

# Cobertura de pruebas
$ yarn run test:cov
```
## Documentacion en Swagger 
La documentación Swagger de la API se encuentra configurada en el archivo main.ts.

## Tech Stack
- **Lenguaje**: TypeScript
- **Servidor**: Node, Express, NestJS
- **Base de Datos**: PostgreSQL
