/**
 * @swagger
 * /api/mocks/mockingusers:
 *   get:
 *     summary: Genera usuarios de prueba
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numUsers:
 *                 type: integer
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
 *                     type: object
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
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /api/mocks/mockingpets:
 *   get:
 *     summary: Genera mascotas de prueba
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numPets:
 *                 type: integer
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
 *                     type: object
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
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /api/mocks/generateData:
 *   post:
 *     summary: Genera datos de prueba
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numUsers:
 *                 type: integer
 *                 example: 50
 *                 description: Número de usuarios a generar
 *               numPets:
 *                 type: integer
 *                 example: 50
 *                 description: Número de mascotas a generar
 *     responses:
 *       200:
 *         description: Datos generados con éxito
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
 *                         type: object
 *                     users:
 *                       type: array
 *                       items:
 *                         type: object
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
 *       500:
 *         description: Error en el servidor
 */
