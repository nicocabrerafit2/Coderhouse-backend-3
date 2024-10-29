import express from 'express'
import { addLogger } from './utils/logger.js'


const app = express()
app.use(addLogger)

// app.post('/', (req, res) => {
//     const { nombre, apellido } = req.body
//     try{
//         if(!nombre || !apellido){
//             req.logger.debug('Le falto al menos un parametro')
//         }

//         await userModel.create({nombre, apellido})
//     }catch (e) {
//         req.logger.error(`Fallo al momenot de crear un usuario con estos valores: ${nombre} ${apellido}`)
//     }
// })

app.get('/', (req, res) => {
    req.logger.warning('Esto es un warn de prueba')
    res.json({ message: 'Probando loggers' })
})

app.listen(8080, () => {
    console.log('Server en 8080')
})
