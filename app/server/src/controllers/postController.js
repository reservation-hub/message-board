const Post = require('../models/post')
const { crudController } = require('./crudController')

exports.postIndex = (req, res, next) => {
    crudController.fetchAll(req, res, next, { Model: Post })
}

exports.postShow = (req, res, next) => {
    const { id } = req.params
    crudController.fetch(req, res, next, { Model: Post, id })
}

exports.postInsert = (req, res, next) => {
    const post = new Post(req.body)
    crudController.insert(req, res, next, { Model: post })
}

exports.postUpdate = async (req, res, next) => {
    const { id } = req.params
    crudController.update(req, res, next, { Model: Post, id, params: req.body })
}

exports.postDelete = (req, res, next) => {
    const { id } = req.params
    crudController.delete(req, res, next, { Model: Post, id })
}