const testPost = {
    title: 'Test Title',
    name: 'Test Name',
    message: 'Test Message'
}
const db = require('../db/mongoose')
const Post = require('../models/post')

exports.postIndex = (req, res) => {
    Post.find({}).exec()
    .then(posts => {
        if (!posts.length) {
            return res.status(404).send({message: 'No post found!'})
        }
        res.send(posts)
    })
    .catch(e => {
        res.status(500).send(e)
    })
}

exports.postShow = (req, res) => {
    const { id } = req.params
    Post.find({id}).exec()
    .then(post => {
        if (!post.length) {
            return res.status(404).send({message: 'No post found!'})
        }
        res.send(post)
    })
    .catch(e => {
        console.log(e)
        res.status(500).send(e)
    })
}

exports.postInsert = (req, res) => {
    const { title, name, message } = req.body
    console.log(req.body)
    console.log({ title, name, message })
    const post = new Post({title, name, message})
    post.save().then(result => {
        res.status(201).send(result)
    }).catch(e => {
        res.status(500).send(e)
    })
}

exports.postUpdate = (req, res) => {
    const { id, title, name, message } = req.body
    Post.find({ id }).exec()
    .then(post => {
        if (!post.length) {
            return res.status(404).send({message: 'No post matched!'})
        }

    })
    .catch(e => {
        res.status(500).send(e)
    })
}