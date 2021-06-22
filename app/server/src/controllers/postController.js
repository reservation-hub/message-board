const router = require('express').Router()
const Post = require('../models/post')
const asyncHandler = require("../lib/asyncHandler")
const { filterUndefined } = require('../../lib/filter')
const bcrypt = require('bcrypt')
const commentRoute = require('./commentController')

router.use('/:postId', commentRoute)

router.get('/', asyncHandler (async (req, res,next) => {
    const page = req.query.page
    const limit = 10
    const skipIndex = (page - 1) * limit
    const  result = {}
    const count =  await Post.countDocuments();
    result.results = await Post.find().sort([['createdAt',-1]]).limit(limit).skip(skipIndex).exec()
    res.status(200).send({result:result,total:Math.ceil(count/limit)})
}))

router.post('/', asyncHandler(async (req, res,next) => {
    const { title, name, message, password } = req.body
    const hash = await bcrypt.hashSync(password, 10)
    const post = new Post({title, name, message, password: hash})
    post.save()
    return res.status(201).send(post)
}))

router.patch('/:postId', asyncHandler(async (req, res,next) => {
    const { title, name, message, password} = req.body
    const { postId:id } = req.params
    const whiteList = filterUndefined({ title, name, message })
    const oldPost = await Post.findOne({ _id: id })
    const passCheck = bcrypt.compareSync(password, oldPost.password)
    if (!passCheck) return next({ message: "Password did not match!", code: 403 })
    const newPost = await Post.findByIdAndUpdate(id, whiteList, { new: true }).orFail().exec() 
    return res.send(newPost);
}))

router.delete('/:postId', asyncHandler(async (req, res,next) => {
    const { postId:_id } = req.params
    const { password } = req.body
    const post = await Post.findOne({_id}).orFail().exec()
    const hashedPass = post.password
    const passCheck = bcrypt.compareSync(password, hashedPass)
    if(!passCheck) next({ message:"Password didn't match", id: _id })
    post.deleteOne()
    return res.status(202).send({ message:"Deleted successfully" })
}))

module.exports = router