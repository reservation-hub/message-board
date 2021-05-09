const Post = require('../models/post')
const { errorHandler } = require('./crudController')
const { filterUndefined } = require('../../lib/filter')


exports.postIndex = (req, res,next) => {


    Post.find({}).exec()
    .then(posts => {
        if (!posts.length) {
            return res.status(404).send({message: 'No post found!'})
        }
        res.send(posts)
    })
    .catch(next)
}


exports.postInsert = (req, res,next) => {


    const { title, name, message, password } = req.body

    const post = new Post({title, name, message, password})
    post.save()
    .then(result => res.status(201).send(result))
    .catch(next)
    
}

exports.postUpdate = async (req, res,next) => {
    const { title, name, message, password} = req.body
    const { id } = req.params
    const whiteList = filterUndefined({ title, name, message, password })
    Post.findByIdAndUpdate(id, whiteList, {new: true}).exec()
    .then(post => {
        if (!post) return res.status(404).send({message: 'No post matched'})
        return res.send(post)
    })
    .catch(next)
}

exports.postDelete = (req, res,next) => {
    const { id:_id } = req.params
    Post.findOneAndDelete({_id}).exec()
    .then(result => {
        if (!result) return res.status(404).send({message: 'No post matched'})
        return res.send({message: 'Successfully deleted'})
    })
    .catch(next)
}