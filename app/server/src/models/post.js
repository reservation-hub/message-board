const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
        },
        comments: [
            {
                name: String,
                text: String,
                password: String,
            }
        ]
    }, {
        timestamps: true,
    })

const Post = mongoose.model('Post', postSchema)

module.exports = Post