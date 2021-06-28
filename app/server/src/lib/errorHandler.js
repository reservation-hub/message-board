const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err, req, res, next)=>{
    
    let error
    if (err.name === "CastError") {
        const message = "Resource not found"
        error = new ErrorResponse(message, 404)
    }

    if (err.code === 11000) {
        const message = "Duplicate field value error"
        error = new ErrorResponse(message, 400)
    }

    if (err.name === "ValidationError") {
        error = new ErrorResponse(err.errors, 400)
    }

    if (undefined === error) {
        error = new ErrorResponse(err, 400)
    }

    /*
    might add more errors for password checks that we might not be using right now 
    or that we will have in res-hub
    */
    return res.status(error.statusCode || 500).send({
        details: error.details
    }) 
}

module.exports = errorHandler
