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
 *                     $ref: '#/components/schemas/Pet'
 * 
 *   post:
 *     summary: Crea una nueva mascota
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - specie
 *               - birthDate
 *             properties:
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
 *                   $ref: '#/components/schemas/Pet'
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
 * 
 * /api/pets/{pid}:
 *   put:
 *     summary: Actualiza una mascota existente
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mascota a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - specie
 *             properties:
 *               name:
 *                 type: string
 *                 example: 'Fido'
 *               specie:
 *                 type: string
 *                 example: 'dog'
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
 *                 payload:
 *                   $ref: '#/components/schemas/Pet'
 *       400:
 *         description: Datos inválidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Incomplete values"
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
 *                 message:
 *                   type: string
 *                   example: "Mascota no encontrada"
 * 
 *   delete:
 *     summary: Elimina una mascota existente
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
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
 *                 message:
 *                   type: string
 *                   example: "Mascota no encontrada"
 * 
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "67379a0a2eb35daf5fe5bbe1"
 *         name:
 *           type: string
 *           example: "Fido"
 *         specie:
 *           type: string
 *           example: "dog"
 *         birthDate:
 *           type: string
 *           format: date-time
 *           example: "2024-07-08T04:19:51.650Z"
 *         image:
 *           type: string
 *           example: "$__dirname/../public/img/filename.jpg"
 */
