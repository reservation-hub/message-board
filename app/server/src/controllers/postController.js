const router = require('express').Router()
const Post = require('../models/post')
const asyncHandler = require("../lib/asyncHandler")
const { filterUndefined } = require('../../lib/filter')
const bcrypt = require('bcrypt')
const postRepository = require('../repositories/postRepository')
const commentRoute = require('./commentController')
const { postValidator } = require('../lib/validator')

router.use('/:postId', commentRoute)

router.get('/', asyncHandler (async (req, res, next) => {
    const page = req.query.page
    const limit = 10
    const skipIndex = (page - 1) * limit
    const count = await Post.countDocuments();
    const result = await postRepository.fetchByPage(limit, skipIndex)
    // TODO need to change return values, and their property name eg: total could be totalItems, result could be posts
    res.status(200).send({ result, total:Math.ceil(count/limit) })
}))

router.post('/', postValidator, asyncHandler(async (req, res,next) => {
    const { title, name, message, password } = req.body
    const hash = await bcrypt.hashSync(password, 10)
    const post = await postRepository.createOne({title, name, message, password: hash})
    return res.status(201).send(post)
}))

router.patch('/:postId', postValidator, asyncHandler(async (req, res,next) => {
    const { title, name, message, password} = req.body
    const { postId:_id } = req.params
    const whiteList = filterUndefined({ title, name, message })
    const oldPost = await Post.findOne({ _id }).orFail().exec()
    if (!bcrypt.compareSync(password, oldPost.password)) return next({ message: "Password did not match!", code: 403,  _id  })
    const newPost = await postRepository.updateById(_id, whiteList)
    return res.send(newPost);
}))

router.delete('/:postId', asyncHandler(async (req, res,next) => {
    const { postId:_id } = req.params
    const { password } = req.body
    const post = await Post.findOne({_id}).orFail().exec()
    const hashedPass = post.password
    if (!bcrypt.compareSync(password, hashedPass)) return next({ message:"Password didn't match", code: 403, _id })
    post.deleteOne()
    return res.status(202).send({ message:"Deleted successfully" })
}))

module.exports = router