const Post = require('../models/post')
const { crudController } = require('./crudController')
const { filterUndefined } = require('../../lib/filter')

exports.postIndex = (req, res, next) => {
    crudController.fetchAll(req, res, next, { Model: Post })
}

exports.postShow = (req, res, next) => {
    const { id } = req.params
    crudController.fetch(req, res, next, {Model: Post, id})
}

exports.postInsert = (req, res, next) => {
    const { title, name, message } = req.body
    const post = new Post({title, name, message})
    crudController.insert(req, res, next, { Model: post })
}

exports.postUpdate = async (req, res, next) => {
    const { title, name, message } = req.body
    const { id } = req.params
    const params = filterUndefined({ title, name, message })
    crudController.update(req, res, next, { Model: Post, id, params })
}

exports.postDelete = (req, res, next) => {
    const { id } = req.params
    crudController.delete(req, res, next, {Model: Post, id})
}