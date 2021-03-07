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
    .catch(e => res.status(500).send(e))
}

exports.postShow = (req, res) => {
    const { id } = req.params
    Post.findById(id).exec()
    .then(post => {
        if (!post.length) {
            return res.status(404).send({message: 'No post found!'})
        }
        res.send(post)
    })
    .catch(e => res.status(500).send(e))
}

exports.postInsert = (req, res) => {
    const { title, name, message } = req.body
    const post = new Post({title, name, message})
    post.save()
    .then(result => res.status(201).send(result))
    .catch(e => res.status(500).send(e))
}

exports.postUpdate = (req, res) => {
    const { id, title, name, message } = req.body
    Post.findById(id).exec()
    .then(result => {
        if (!result) {
            return res.status(404).send({message: "No post found!"})
        }
        result.setParams({title, name, message})
        result.save()
        .then(post => res.status(201).send(post))
        .catch(e => res.status(500).send(e))
    })
    .catch(e => res.status(500).send(e))
}

exports.postDelete = (req, res) => {
    const { id:_id } = req.body
    Post.deleteOne({_id}).exec()
    .then(result => {
        if (!result.deletedCount) {
            return res.status(404).send({message: 'No post matched!'})
        }
        res.send(result)
    })
    .catch(e => res.status(500).send(e))
}