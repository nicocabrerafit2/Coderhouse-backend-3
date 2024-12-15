/**
 * @swagger
 * components:
 *   schemas:
 *     MockUser:
 *       type: object
 *       properties:
 *         first_name:
 *           type: string
 *           example: "John"
 *         last_name:
 *           type: string
 *           example: "Doe"
 *         email:
 *           type: string
 *           example: "john.doe@example.com"
 *         password:
 *           type: string
 *           example: "$2b$10$..."
 *         role:
 *           type: string
 *           enum: [user, admin]
 *           example: "user"
 *         pets:
 *           type: array
 *           items:
 *             type: string
 *           example: []
 * 
 *     MockPet:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Fido"
 *         specie:
 *           type: string
 *           example: "dog"
 *         birthDate:
 *           type: string
 *           format: date-time
 *         adopted:
 *           type: boolean
 *           example: false
 *         owner:
 *           type: string
 *           nullable: true
 *           example: null
 *         image:
 *           type: string
 *           example: "https://example.com/pet.jpg"
 * 
 * /api/mocks/mockingusers:
 *   post:
 *     summary: Genera usuarios de prueba
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - numUsers
 *             properties:
 *               numUsers:
 *                 type: integer
 *                 minimum: 1
 *                 example: 50
 *                 description: Número de usuarios a generar
 *     responses:
 *       200:
 *         description: Usuarios generados con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 payload:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MockUser'
 *       400:
 *         description: Solicitud incorrecta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 error:
 *                   type: string
 *                   example: "Debe enviar por body la cantidad de usuarios a generar (numeros). Por ejemplo numUsers:50"
 * 
 * /api/mocks/mockingpets:
 *   post:
 *     summary: Genera mascotas de prueba
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - numPets
 *             properties:
 *               numPets:
 *                 type: integer
 *                 minimum: 1
 *                 example: 50
 *                 description: Número de mascotas a generar
 *     responses:
 *       200:
 *         description: Mascotas generadas con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 payload:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/MockPet'
 *       400:
 *         description: Solicitud incorrecta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 error:
 *                   type: string
 *                   example: "Debe enviar por body la cantidad de mascotas a generar (numeros). Por ejemplo numPets:50"
 * 
 * /api/mocks/generateData:
 *   post:
 *     summary: Genera y guarda datos de prueba en la base de datos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - numUsers
 *               - numPets
 *             properties:
 *               numUsers:
 *                 type: integer
 *                 minimum: 1
 *                 example: 50
 *                 description: Número de usuarios a generar
 *               numPets:
 *                 type: integer
 *                 minimum: 1
 *                 example: 50
 *                 description: Número de mascotas a generar
 *     responses:
 *       200:
 *         description: Datos generados y guardados con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 payload:
 *                   type: object
 *                   properties:
 *                     pets:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/MockPet'
 *                     users:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/MockUser'
 *       400:
 *         description: Solicitud incorrecta
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 error:
 *                   type: string
 *                   example: "Debe enviar por body la cantidad de usuarios y mascotas a generar (numeros). Por ejemplo {numUsers: 50, numPets: 50}"
 */
