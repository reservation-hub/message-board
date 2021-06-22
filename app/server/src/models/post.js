const mongoose = require('mongoose')
const commentSchema = require('./comment')

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
            commentSchema,
        ]
    }, {
        timestamps: true,
    })

const Post = mongoose.model('Post', postSchema)

module.exports = Post