const Post = require('../models/post')
const { crudController, errorHandler } = require('./crudController')
const { filterUndefined } = require('../../lib/filter')

exports.postIndex = (req, res) => {
    crudController.fetchAll(Post, res)
}

exports.postInsert = (req, res) => {
    const { title, name, message } = req.body
    const post = new Post({title, name, message})
    crudController.insert(post, res)
}

exports.postUpdate = async (req, res) => {
    const { title, name, message } = req.body
    const { id } = req.params
    const whiteList = filterUndefined({ title, name, message })
    crudController.update(Post, id, whiteList, res)
}

exports.postDelete = (req, res) => {
    const { id } = req.params
    crudController.delete(Post, id, res)
}