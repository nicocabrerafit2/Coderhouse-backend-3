/**
 * @swagger
 * /api/pets:
 *   get:
 *     summary: Obtiene todas las mascotas
 *     responses:
 *       200:
 *         description: Lista de mascotas
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
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "67379a0a2eb35daf5fe5bbe1"
 *                       name:
 *                         type: string
 *                         example: "picachu"
 *                       specie:
 *                         type: string
 *                         example: "gorilla"
 *                       birthDate:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-07-08T04:19:51.650Z"
 *                       adopted:
 *                         type: boolean
 *                         example: false
 *                       owner:
 *                         type: string
 *                         nullable: true
 *                         example: null
 *                       image:
 *                         type: string
 *                         example: "https://loremflickr.com/337/1866?lock=2343161907846050"
 *                       __v:
 *                         type: integer
 *                         example: 0
 *       500:
 *         description: Error en el servidor
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
 *                   example: "Error en el servidor"
 */

/**
 * @swagger
 * /api/pets:
 *   post:
 *     summary: Crea una nueva mascota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Fido'
 *               age:
 *                 type: integer
 *                 example: 3
 *               specie:
 *                 type: string
 *                 example: 'dog'
 *               birthDate:
 *                 type: string
 *                 format: date-time
 *                 example: '2024-07-08T04:19:51.650Z'
 *     responses:
 *       201:
 *         description: Mascota creada
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
 *                     _id:
 *                       type: string
 *                       example: "67379a0a2eb35daf5fe5bbe1"
 *                     name:
 *                       type: string
 *                       example: "Fido"
 *                     specie:
 *                       type: string
 *                       example: "dog"
 *                     birthDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-07-08T04:19:51.650Z"
 *                     adopted:
 *                       type: boolean
 *                       example: false
 *                     owner:
 *                       type: string
 *                       nullable: true
 *                       example: null
 *                     image:
 *                       type: string
 *                       example: "https://loremflickr.com/337/1866?lock=2343161907846050"
 *                     __v:
 *                       type: integer
 *                       example: 0
 *       400:
 *         description: Valores incompletos
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
 *                   example: "Incomplete values"
 *       500:
 *         description: Error en el servidor
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
 *                   example: "Error en el servidor"
 */

/**
 * @swagger
 * /api/pets/withimage:
 *   post:
 *     summary: Crea una nueva mascota con una imagen
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               name:
 *                 type: string
 *                 example: 'Fido'
 *               specie:
 *                 type: string
 *                 example: 'dog'
 *               birthDate:
 *                 type: string
 *                 format: date-time
 *                 example: '2024-07-08T04:19:51.650Z'
 *     responses:
 *       201:
 *         description: Mascota creada con imagen
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
 *                     _id:
 *                       type: string
 *                       example: "67379a0a2eb35daf5fe5bbe1"
 *                     name:
 *                       type: string
 *                       example: "Fido"
 *                     specie:
 *                       type: string
 *                       example: "dog"
 *                     birthDate:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-07-08T04:19:51.650Z"
 *                     adopted:
 *                      

/**
 * @swagger
 * /api/pets/{pid}:
 *   put:
 *     summary: Actualiza una mascota existente
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la mascota a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'picachu'
 *               age:
 *                 type: integer
 *                 example: 4
 *               specie:
 *                 type: string
 *                 example: 'gorilla'
 *               birthDate:
 *                 type: string
 *                 format: date-time
 *                 example: '2024-07-08T04:19:51.650Z'
 *               adopted:
 *                 type: boolean
 *                 example: false
 *               owner:
 *                 type: string
 *                 nullable: true
 *                 example: null
 *               image:
 *                 type: string
 *                 example: 'https://loremflickr.com/337/1866?lock=2343161907846050'
 *     responses:
 *       200:
 *         description: Mascota actualizada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Datos de mascota actualizada"
 *       400:
 *         description: ID no válido
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
 *                   example: "ID no válido"
 *       404:
 *         description: Mascota no encontrada
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
 *                   example: "Mascota no encontrada"
 *       500:
 *         description: Error en el servidor
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
 *                   example: "Error en el servidor"
 */

/**
 * @swagger
 * /api/pets/{pid}:
 *   delete:
 *     summary: Elimina una mascota existente
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la mascota a eliminar
 *     responses:
 *       200:
 *         description: Mascota eliminada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Mascota eliminada"
 *       400:
 *         description: ID no válido
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
 *                   example: "ID no válido"
 *       404:
 *         description: Mascota no encontrada
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
 *                   example: "Mascota no encontrada"
 *       500:
 *         description: Error en el servidor
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
 *                   example: "Error en el servidor"
 */
