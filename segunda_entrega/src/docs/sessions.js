/**
 * @swagger
 * components:
 *   schemas:
 *     LoginCredentials:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: 'john.doe@example.com'
 *         password:
 *           type: string
 *           example: 'password123'
 * 
 *     RegisterInput:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - email
 *         - password
 *       properties:
 *         first_name:
 *           type: string
 *           example: 'John'
 *         last_name:
 *           type: string
 *           example: 'Doe'
 *         email:
 *           type: string
 *           example: 'john.doe@example.com'
 *         password:
 *           type: string
 *           example: 'password123'
 * 
 * /api/sessions/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterInput'
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
 *                   description: ID del usuario creado
 *                   example: '67379d0d1504db7b9830b9e7'
 *       400:
 *         description: Error en el registro
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
 *                   example: 'Incomplete values | User already exists'
 * 
 * /api/sessions/login:
 *   post:
 *     summary: Inicia sesión de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginCredentials'
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
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *               example: 'coderCookie=token; Max-Age=3600000'
 *       400:
 *         description: Error en el login
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
 *                   example: 'Incomplete values | Incorrect password'
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
 *                   example: "User doesn't exist"
 * 
 * /api/sessions/current:
 *   get:
 *     summary: Obtiene información del usuario actual
 *     security:
 *       - cookieAuth: []
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
 *                     name:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 * 
 * /api/sessions/unprotectedLogin:
 *   post:
 *     summary: Login sin protección adicional
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginCredentials'
 *     responses:
 *       200:
 *         description: Login sin protección exitoso
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
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *               example: 'unprotectedCookie=token; Max-Age=3600000'
 *       400:
 *         $ref: '#/components/responses/LoginError'
 *       404:
 *         $ref: '#/components/responses/UserNotFound'
 * 
 * /api/sessions/unprotectedCurrent:
 *   get:
 *     summary: Obtiene información del usuario actual (sin protección)
 *     security:
 *       - cookieAuth: []
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
 *                   description: Datos completos del usuario
 *       401:
 *         description: No autorizado
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
 *                   example: 'No token provided | Invalid or expired token'
 */
