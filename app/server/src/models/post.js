const mongoose = require('mongoose')
const Post = mongoose.model('Post', {
    title: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = Post