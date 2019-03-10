# e2e-horchata-app
Código de la app para charla de e2e/automated testing, Horchata JS, 9 de Marzo 2019.

## Correr la app

### Dependencias

Necesitás tener [Node](https://nodejs.org). La app se conecta a [MongoDB](https://www.mongodb.com/download-center/community).

Cloná este repo

```
git clone git@github.com:dieguito151/e2e-horchata-app.git
```

Accedé a la carpeta

```
cd e2e-horchata-app
```

Corré MongoDB (o asegurate que esté corriendo un server)

```
mongod
```

Instalá y corré la app

```
npm install
npm start
```

Instalá y corré el frontend

```
cd client
npm run serve
```

## Correr los tests

En el root de la app

### Unit tests

```
npm run test
```

### E2E tests
```
npm run e2e
```
