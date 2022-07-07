class CustomAPIError extends Error{
    constructor (message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}


const createCustomError = (msg, status_code) => {
    return new CustomAPIError(msg, status_code);
}


module.exports = {createCustomError, CustomAPIError};