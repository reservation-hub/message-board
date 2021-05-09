const Post = require('../models/post')
const asyncHandler = require("../lib/asyncHandler")
const { filterUndefined } = require('../../lib/filter')
<<<<<<< HEAD

<<<<<<< HEAD
exports.postIndex = (req, res) => {
=======
exports.postIndex = (req, res,next) => {
=======
const ErrorResponse = require("../utils/errorResponse")
exports.postIndex = asyncHandler ((req, res,next) => {
>>>>>>> finished error handling

>>>>>>> error handlers
    Post.find({}).exec()
    .then(posts => {
        if (!posts.length) {
            return next(new ErrorResponse("There are no posts avialable at the moment",404))
        }else{
            res.send(posts)
        }
        
    });
    
})

<<<<<<< HEAD
<<<<<<< HEAD
exports.postInsert = (req, res) => {
    console.log(req.body)
=======
exports.postInsert = (req, res,next) => {
=======
exports.postInsert = asyncHandler((req, res,next) => {
>>>>>>> finished error handling

>>>>>>> error handlers
    const { title, name, message, password } = req.body

    const post = new Post({title, name, message, password})
    post.save()
    .then(result => res.status(201).send(result))
    .catch(next)
    
})

exports.postUpdate = asyncHandler(async (req, res,next) => {
    const { title, name, message, password} = req.body
    const { id } = req.params
    const whiteList = filterUndefined({ title, name, message, password })
    Post.findByIdAndUpdate(id, whiteList, {new: true}).exec()
    .then(post => {
        if (!post) {
            return next(new ErrorResponse("The post you are trying to find does't exist",404))
        }else{
            return res.send(post)
        }
        
    })
})

exports.postDelete = asyncHandler((req, res,next) => {
    const { id:_id } = req.params
    Post.findOneAndDelete({_id}).exec()
    .then(result => {
        if (!result){
            return next(new ErrorResponse("The post you are trying to delete does't exist",404))
        }else{
            return res.send({message: 'Successfully deleted'})
        }
        
    })
})