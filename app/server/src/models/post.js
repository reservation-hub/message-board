const mongoose = require('mongoose')
const { post } = require('../routes/posts')

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
        }
    }, {
        timestamps: true,
    })

postSchema.methods.setParams = function(object) {
    for (const [key, value] of Object.entries(object)) {
        this[key] = value
    }
}

postSchema.statics = require('./crudSchema')

const Post = mongoose.model('Post', postSchema)

module.exports = Post