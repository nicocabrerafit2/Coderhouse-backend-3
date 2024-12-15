/**
 * @swagger
 * components:
 *   schemas:
 *     Adoption:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "1234567890abcdef12345678"
 *         owner:
 *           type: string
 *           description: ID del usuario que adopta
 *           example: "67379d0d1504db7b9830b9e7"
 *         pet:
 *           type: string
 *           description: ID de la mascota adoptada
 *           example: "67379a0a2eb35daf5fe5bbe1"
 * 
 * /api/adoptions:
 *   get:
 *     summary: Obtiene todas las adopciones
 *     responses:
 *       200:
 *         description: Lista de adopciones
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
 *                     $ref: '#/components/schemas/Adoption'
 * 
 * /api/adoptions/{aid}:
 *   get:
 *     summary: Obtiene una adopción por ID
 *     parameters:
 *       - in: path
 *         name: aid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la adopción
 *     responses:
 *       200:
 *         description: Información de la adopción
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 payload:
 *                   $ref: '#/components/schemas/Adoption'
 *       404:
 *         description: Adopción no encontrada
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
 *                   example: "Adoption not found"
 * 
 * /api/adoptions/{uid}/{pid}:
 *   post:
 *     summary: Crea una nueva adopción
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario que adopta
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la mascota a adoptar
 *     responses:
 *       200:
 *         description: Adopción exitosa
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
 *                   example: "Pet adopted"
 *       400:
 *         description: Mascota ya adoptada
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
 *                   example: "Pet is already adopted"
 *       404:
 *         description: Usuario o mascota no encontrados
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
 *                   example: "user Not found | Pet not found"
 */
