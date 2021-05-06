const Post = require('../models/post')
const { errorHandler } = require('./crudController')
const { filterUndefined } = require('../../lib/filter')

exports.postIndex = (req, res) => {
    
    Post.find({}).exec()
    .then(posts => {
        if (!posts.length) {
            return res.status(404).send({message: 'No post found!'})
        }
        res.send(posts)
    })
    .catch(e => errorHandler(e, res))
}

exports.postInsert = (req, res) => {
    const { title, name, message, password } = req.body
    const post = new Post({title, name, message, password})
    post.save()
    .then(result => res.status(201).send(result))
    .catch(e => errorHandler(e, res))
    
}

exports.postUpdate = async (req, res) => {
    const { title, name, message,password} = req.body
    const { id } = req.params
    const whiteList = filterUndefined({ title, name, message, password })
    Post.findByIdAndUpdate(id, whiteList, {new: true}).exec()
    .then(post => {
        if (!post) return res.status(404).send({message: 'No post matched'})
        return res.send(post)
    })
    .catch(e => errorHandler(e, res))
}

exports.postDelete = (req, res) => {
    const { id:_id } = req.params
    Post.findOneAndDelete({_id}).exec()
    .then(result => {
        if (!result) return res.status(404).send({message: 'No post matched'})
        return res.send({message: 'Successfully deleted'})
    })
    .catch(e => errorHandler(e, res))
}