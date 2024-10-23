import { EErrors } from "../handleErrors/handleErrors.js";

export default (err, req, res, next) => {
    switch(err.code){
        case EErrors.INVALID_TYPES:
            res.json({status: 'error en propiedades recibidas', error: err.name})
            break; 
        case EErrors.DATA_BASE:
        res.json({status: 'error de base de datos', error: err.name})
        break;
        case EErrors.ROUTE:
        res.json({status: 'error en la ruta', error: err.name})
        break;  
        default:
            res.json({status: 'error generico', error: err.name})
            break;
    }
}

