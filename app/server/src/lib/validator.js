const { check, validationResult } = require("express-validator")

// TODO need to create different validators per model

exports.postValidator = []

exports.commentValidator = []

exports.validator = [
    check('title')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Title is required")
    .bail()
    .isLength({min:3})
    .withMessage("Title has to have 3 or more than 3 characters"),

    
    check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .bail()
    .isLength({min:3})
    .withMessage("Name has to have 3 or more than 3 characters"),

    
    check('message')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Message is required")
    .bail()
    .isLength({min:3})
    .withMessage("Message has to have 3 or more than 3 characters"),

    
    check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .bail()
    .isLength({min:6})
    .withMessage("Password must be more than 6 letters")
    ,
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()) return next(errors)
        return next()
    }
]