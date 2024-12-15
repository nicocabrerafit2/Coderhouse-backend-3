# API de Gestión de Mascotas y Usuarios

## Descripción
API REST para gestionar usuarios y mascotas, con funcionalidades de mockeo de datos y documentación Swagger.

## Requisitos Previos
- Node.js (v14 o superior)
- MongoDB
- Docker (opcional)

## Instalación

1. **Clonar el repositorio**
bash
git clone [URL_DEL_REPOSITORIO]
cd segunda_entrega

2. **Configurar variables de entorno**
- Solicitar el archivo `.env` al administrador
- Colocarlo en la raíz del proyecto

3. **Instalar dependencias**
bash
npm install

4. **Iniciar el servidor**
bash
Modo desarrollo
npm run dev
Modo producción
npm start

## Endpoints Principales

### Usuarios
- `GET /api/users` - Obtener todos los usuarios
- `GET /api/users/:uid` - Obtener usuario por ID
- `PUT /api/users/:uid` - Actualizar usuario
- `DELETE /api/users/:uid` - Eliminar usuario

### Mascotas
- `GET /api/pets` - Obtener todas las mascotas
- `POST /api/pets` - Crear nueva mascota
- `POST /api/pets/withimage` - Crear mascota con imagen
- `PUT /api/pets/:pid` - Actualizar mascota
- `DELETE /api/pets/:pid` - Eliminar mascota

### Generación de Datos Mock
- `GET /api/mocks/mockingusers` - Generar usuarios de prueba
  ```json
  {
    "numUsers": 10 // Número de usuarios a generar
  }
  ```
- `GET /api/mocks/mockinpets` - Generar mascotas de prueba
  ```json
  {
    "numPets": 10 // Número de mascotas a generar
  }
  ```
- `POST /api/mocks/generateData` - Generar y guardar datos en MongoDB
  ```json
  {
    "numUsers": 10,
    "numPets": 10
  }
  ```

## Estructura de Datos

### Usuario
json
{
"first_name": "string",
"last_name": "string",
"email": "string",
"password": "string (encriptada)",
"role": "user | admin",
"pets": []
}

### Mascota
json
{
"name": "string",
"specie": "string",
"birthDate": "Date",
"adopted": false,
"owner": "null | userId",
"image": "URL"
}

## Testing
bash
Ejecutar tests
npm test

## Documentación
La documentación completa de la API está disponible en:
- Swagger UI: `http://localhost:8080/api-docs`

## Tecnologías Utilizadas
- Express.js
- MongoDB/Mongoose
- JWT para autenticación
- Multer para manejo de archivos
- Swagger para documentación
- Faker.js para datos mock
- Mocha/Chai para testing

## Scripts Disponibles
- `npm run dev` - Iniciar en modo desarrollo
- `npm start` - Iniciar en modo producción
- `npm test` - Ejecutar tests