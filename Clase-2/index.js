import express from 'express'
import HandleError, { EErrors } from './src/handleErrors/handleErrors.js';
import middlewareError from './src/middleware/middlewareError.js';
import { generateUserErrorInfo } from './src/handleErrors/userErrors.js';
// import compression from 'express-compression'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(compression({
//     brotli: { enabled: true, zlib: {}}
// }));
// app.get('/texto', (req, res) => {
//     let text = 'Hola coders, esto debe de ser un texto largo'
//     for(let i=0; i<2e5;i++){
//         text+='Hola coders, esto debe de ser un texto largo'
//     }
//     res.send(text)
// })

const USERS = []

app.post('/api/user', (req, res) => {
    const { nombre, apellido, edad } = req.body
    if(!nombre || !apellido || !edad){
        HandleError.createError({
            name:'Error al crear el usuario',
            cause: generateUserErrorInfo({ nombre, apellido, edad }),
            message: 'Falta alguna propiedad',
            code: EErrors.INVALID_TYPES
        })
    }

    USERS.push({nombre, apellido, edad})
    res.send({message: 'Creado el usuario', payload: {nombre, apellido, edad} })
})

app.use(middlewareError) // (err, req, res, next)

app.listen(8080, () => {
    console.log('Conectado sv')
})
