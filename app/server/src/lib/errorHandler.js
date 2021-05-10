const ErrorResponse = require("../utils/errorResponse")

const errorHandler = (err,req,res,next)=>{
    
    let error  = {...err}
    console.log(err)
    error.message = err.message
    console.log(error)
    if(err.name === "CastError"){
        const message = "Resource not found"
        error = new ErrorResponse(message,404)
    }
    if(err.code === 11000){
        const message = "Duplicate field value error"
        error = new ErrorResponse(message,400)
    }

    if(error.errors){
        const message = Object.values(error.errors).map(error=>error.msg).join(" , ")
        error = new ErrorResponse(message,400)

    }

    /*
    might add more errors for password checks that we might not be using right now 
    or that we will have in res-hub
    */

   res.status(error.statusCode || 500).json({
       success: false,
       error:error.message || "Server Error"
   }) 
}

module.exports = errorHandler
