# Documentación Backend - ADO

<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/testing-files-b4524.appspot.com/o/amarillos-logo.png?alt=media&token=3c210cbd-b9df-4b1e-907d-133a94769000" width="100%" alt="Amarillos de oro Logo" />
</p>


## Creación de CRUD simple en NestJS
Para facilitar la generación de un **CRUD** básico en `NestJS`, podemos emplear el siguiente comando:

| Ejemplo: Generación del servicio de usuarios

```bash
$ nest generate resource users
```

Si no deseamos incluir archivos de prueba en la creación del **CRUD**, podemos utilizar el siguiente comando, el cual omitirá la generación de archivos `.spec.ts`:

```bash
$ nest generate resource users --no-spec
```

Después de ejecutar cualquiera de estos dos comandos, Nest solicitará especificar el tipo de capa (layer) que deseamos generar. En este caso, seleccionaremos "**REST API**".

| Ejemplo:

```bash
$ nest generate resource users

> ? What transport layer do you use? REST API

> ? Would you like to generate CRUD entry points? Yes

> CREATE src/users/users.module.ts (224 bytes)
> CREATE src/users/users.controller.spec.ts (525 bytes)
> CREATE src/users/users.controller.ts (1109 bytes)
> CREATE src/users/users.service.spec.ts (453 bytes)
> CREATE src/users/users.service.ts (625 bytes)
> CREATE src/users/dto/create-user.ts (195 bytes)
> CREATE src/users/dto/update-user.ts (281 bytes)
> CREATE src/users/entities/user.entity.ts (187 bytes)
> UPDATE src/app.module.ts (312 bytes)
```

Cuando se nos pregunte "`What transport layer do you use?`", debemos seleccionar la opción "**REST API**".

Posteriormente, al recibir la pregunta "`Would you like to generate CRUD entry points?`", responderemos con "**Yes**" o "**y**" para indicar que deseamos que se genere el **CRUD** por defecto del servicio.

## Explicación de los archivos creados:
- `src/users/users.module.ts`: Se crea un módulo específico para el recurso "users". Los módulos son componentes esenciales en **NestJS** que permiten organizar y estructurar la aplicación.

- `src/users/users.controller.spec.ts`: Se genera un archivo de prueba (spec) para el controlador del recurso "users". Estos archivos son útiles para realizar pruebas unitarias en el código.

- `src/users/users.controller.ts`: Se crea un controlador para manejar las solicitudes relacionadas con el recurso "users". El controlador define las rutas, las operaciones **CRUD** y maneja la lógica de solicitud.

- `src/users/users.service.spec.ts`: Se genera un archivo de prueba para el servicio asociado al recurso "**users**". Al igual que el controlador, es útil para realizar pruebas unitarias en el servicio.

- `src/users/users.service.ts`: Se crea un servicio que contiene la lógica empresarial relacionada con el recurso "**users**". Aquí es donde se implementan las operaciones **CRUD** y se manejan las interacciones con la base de datos.

- `src/users/dto/create-user.ts`: Se genera un objeto de transferencia de datos (**DTO**) para la creación de usuarios. Los **DTOs** ayudan a estructurar los datos que se reciben o envían en las solicitudes **HTTP**.

- `src/users/dto/update-user.ts`: Se crea un **DTO** para la actualización de usuarios. Este DTO se utiliza para definir la estructura de los datos necesarios para actualizar un usuario.

- `src/users/entities/user.entity.ts`: Se genera una entidad que representa el modelo de datos para un usuario. En este archivo se define la estructura de la tabla de la base de datos para almacenar información de usuarios.

- **UPDATE** `src/app.module.ts`: Se realiza una actualización en el archivo `app.module.ts`, que es el módulo principal de la aplicación. La actualización suele ser para importar el nuevo módulo de usuarios (**UsersModule**) y agregarlo a la lista de módulos disponibles en la aplicación.

Con esto, contamos ahora con un comando automatizado que agiliza la creación de un **CRUD** de manera eficiente.

| **Recurso**: [CRUD generator (TypeScript only)](https://docs.nestjs.com/recipes/crud-generator)

## 
