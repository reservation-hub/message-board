const mongoose = require('mongoose')
const { post } = require('../routes/posts')
const bcrypt = require("bcrypt")

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title入力して下さい"],
            trim: true
        },
        name: {
            type: String,
            required: [true,"Name入力して下さい"],
            trim: true
        },
        message: {
            type: String,
            required: [true,"Message入力して下さい"],
            trim: true
        },
        password: {
            type:String,
            required: [true,"Message入力して下さい"],
            trim:true
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
        const salt = await bcrypy.genSalt()
        this.password = await bcrypt.hash(this.password,salt)
        next()
    }catch{
        res.status(500).send("internal server error")
    }
})
const Post = mongoose.model('Post', postSchema)

module.exports = Post