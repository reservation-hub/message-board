const Post = require('../models/post')
const asyncHandler = require("../lib/asyncHandler")
const { filterUndefined } = require('../../lib/filter')
const ErrorResponse = require("../utils/errorResponse")


exports.postIndex = asyncHandler (async (req, res,next) => {

    await Post.find({}).orFail().exec()
    .then(posts => {
      
            res.send(posts)
        }
        
    )
    
})


exports.postInsert = asyncHandler((req, res,next) => {

    const { title, name, message, password } = req.body

    const post = new Post({title, name, message, password})
    post.save()
    .then(result => res.status(201).send(result))
    
})

exports.postUpdate = asyncHandler(async (req, res,next) => {
    const { title, name, message, password} = req.body
    const { id } = req.params
    const whiteList = filterUndefined({ title, name, message, password })
    await Post.findByIdAndUpdate(id, whiteList, {new: true}).orFail().exec()
    .then(post => {
         return res.send(post)
    })
})

exports.postDelete = asyncHandler(async (req, res,next) => {
    const { id:_id } = req.params
    await Post.findOneAndDelete({_id}).orFail().exec()
    .then( deleted=>{
        res.send({message: 'Successfully deleted'})
    }
    )
})
