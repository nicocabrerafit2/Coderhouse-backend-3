Pasos para ejecutar el repositorio:

- Paso 1: Clonar el repositorio
- Paso 2: Descargar el archivo .env (enviado por privado) y pegarlo dentro de la carpeta "Primera entrega" (a la misma altura que la carpeta "src")
- Paso 3: Abrir terminal desde el archivo app.js
- Paso 4: Instalar dependencias (npm i)
- Paso 5: Abrir terminal desde archivo app.js y ejecutar npm run dev

  Luego de eso ya se encuentra en condiciones de probar los endpoints desde postman.

Esta primera entrega contiene:

- GET http://localhost:8080/api/pets muestra las mascotas

- GET http://localhost:8080/api/users muestra los usuarios

- GET http://localhost:8080/api/mocks/mockingusers genera con faker usuarios (recibe por body el parametro numUsers con el cual se define la cantidad a generar)
  Estos usuarios llevan la siguiente estructura de propiedades:
  "first_name" = random
  "last_name" = random
  "email" = random
  “password” con la contraseña “coder123” encriptada.
  “role” = puede variar entre “user” y “admin”.
  “pets” = array vacío.

- GET http://localhost:8080/api/mocks/mockinpets genera con faker mascotas (recibe por body el parametro numPets con el cual se define la cantidad a generar)
  Estas mascotas llevan la siguiente estructura de propiedades:
  "name" = random
  "specie" = random
  "birthDate" = random
  "adopted" = false,
  "owner" = null,
  "image" = random url,

- POST http://localhost:8080/api/mocks/generateData genera con faker mascotas y usuarios (recibe por body el parametro numPets y numUsers con los cuales se definen la cantidad a generar, si no se envian estos parametros por defecto es 50 la cantidad. Estos son agregados en la base de datos mongoDB)

Para lograr esto se utilizan:

- Los router "mocks.router.js", "users.router.js" y "pets.router.js"
- Desde el archivo utils.js las funciones "generateMockPets", "generateMockUsers" y "createHash"
- Desde UserRepository el metodo "mockingusers" y desde petRepository el metodo "mockingpets"
- Los controller "mocks.controller", "users.controller" y "pets.controller" desde donde se responden las peticiones

Se envian variables de entorno por archivo .env
