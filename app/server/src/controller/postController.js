const testPost = {
    title: 'Test Title',
    name: 'Test Name',
    message: 'Test Message'
}

const Post = require('../models/post')

exports.postIndex = (req, res) => {
    res.send(testPost)
}