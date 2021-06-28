const errorHandler = (err, req, res, next)=>{
    
    if (err.code === 404 || err.name === "CastError") {
        return res.status(404).send({ message: "Resource not found"})
    }
    
    if (err.code === 11000) {
        return res.status(400).send({ message: "Duplicate field value error"})
    }
    
    if (err.name === "ValidationError") {
        return res.status(400).send({ details: err.errors.errors})
    }
    
    /*
    might add more errors for password checks that we might not be using right now 
    or that we will have in res-hub
    */

    // default error
    console.log(err)
    return res.status(err.code || 500).send("Internal Server Error") 
}

module.exports = errorHandler
