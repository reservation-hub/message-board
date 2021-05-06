const {check,validationResult} = require("express-validator")

exports.validator = [
    check('title')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:3})
    .run(req)
    .withMessage("Title is required"),

    
    check('name')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:3})
    .run(req)
    .withMessage("Name is required"),

    
    check('message')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:3})
    .run(req)
    .withMessage("Message is required"),

    
    check('password')
    .trim()
    .not()
    .isEmpty()
    .isLength({min:6})
    .run(req)
    .withMessage("Password is required"),
    (req,res,next)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({errors:errors.array()})
        }
        next()
    }
]