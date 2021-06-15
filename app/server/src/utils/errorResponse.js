class ErrorResponse extends Error {
    constructor(message,statusCode,e){
        super(e);
        this.statusCode = statusCode
        this.message= message
    }
}


module.exports = ErrorResponse