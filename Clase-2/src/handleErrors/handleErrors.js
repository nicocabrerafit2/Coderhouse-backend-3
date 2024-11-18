
export default class HandleError {
    static createError({ name = 'Error', cause, message, code = 1}){
        const error = new Error(message, {cause})
        error.name= name;
        error.code = code;
        throw error;
    }
}


export const EErrors = {
    DATA_BASE: 3,
    ROUTE:2,
    INVALID_TYPES: 1
}
