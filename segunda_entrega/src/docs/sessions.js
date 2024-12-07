/**
 * @swagger
 * /api/sessions/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 example: 'John'
 *               last_name:
 *                 type: string
 *                 example: 'Doe'
 *               email:
 *                 type: string
 *                 example: 'john.doe@example.com'
 *               password:
 *                 type: string
 *                 example: 'password123'
 *     responses:
 *       200:
 *         description: Usuario registrado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'success'
 *                 payload:
 *                   type: string
 *                   example: 'User ID'
 *       400:
 *         description: Valores incompletos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 error:
 *                   type: string
 *                   example: 'Incomplete values'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /api/sessions/login:
 *   post:
 *     summary: Inicia sesión un usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: 'john.doe@example.com'
 *               password:
 *                 type: string
 *                 example: 'password123'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'success'
 *                 message:
 *                   type: string
 *                   example: 'Logged in'
 *       400:
 *         description: Valores incompletos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 error:
 *                   type: string
 *                   example: 'Incomplete values'
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 error:
 *                   type: string
 *                   example: 'User doesn\'t exist'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /api/sessions/current:
 *   get:
 *     summary: Obtiene la información del usuario actual
 *     responses:
 *       200:
 *         description: Información del usuario actual
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'success'
 *                 payload:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 'user id'
 *                     first_name:
 *                       type: string
 *                       example: 'John'
 *                     last_name:
 *                       type: string
 *                       example: 'Doe'
 *                     email:
 *                       type: string
 *                       example: 'john.doe@example.com'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /api/sessions/unprotectedLogin:
 *   get:
 *     summary: Inicia sesión un usuario sin protección adicional
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: 'john.doe@example.com'
 *               password:
 *                 type: string
 *                 example: 'password123'
 *     responses:
 *       200:
 *         description: Inicio de sesión sin protección exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'success'
 *                 message:
 *                   type: string
 *                   example: 'Unprotected Logged in'
 *       400:
 *         description: Valores incompletos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 error:
 *                   type: string
 *                   example: 'Incomplete values'
 *       404:
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: 'error'
 *                 error:
 *                   type: string
 *                   example: 'User doesn\'t exist'
 *       500:
 *         description: Error en el servidor
 */

/**
 * @swagger
 * /api/sessions/unprotectedCurrent:
 *   get:
 *     summary: Obtiene la información del usuario actual sin protección adicional
 *     responses:
 *       200:
 *         description: Información del usuario actual sin protección adicional
 *         content:
 *           application/json:
 *             schema:
 */
