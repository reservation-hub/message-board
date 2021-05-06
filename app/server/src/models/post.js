const mongoose = require('mongoose')
const { post } = require('../routes/posts')
const bcrypt = require("bcrypt")

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
           
        },
        name: {
            type: String,
            
        },
        message: {
            type: String,
           
        },
        password:{
            type:String,
        }
    }, {
        timestamps: true,
    })

postSchema.methods.setParams = function(object) {
    for (const [key, value] of Object.entries(object)) {
        this[key] = value
    }
}

postSchema.pre("save", async function (req,res,next) {
    try{
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password,salt)
        next()
    }catch{
        res.status(500).send("internal server error")
    }
})
const Post = mongoose.model('Post', postSchema)

module.exports = Post