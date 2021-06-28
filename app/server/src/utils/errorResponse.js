class ErrorResponse extends Error {
    constructor(details, statusCode, e) {
        super(e);
        this.statusCode = statusCode
        this.details = details
    }
}


module.exports = ErrorResponse