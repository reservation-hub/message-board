const Post = require('../models/post')
const asyncHandler = require("../lib/asyncHandler")
const { filterUndefined } = require('../../lib/filter')
const bcrypt = require('bcrypt')

exports.postIndex = asyncHandler (async (req, res,next) => {
    const page = req.query.page
    const limit = 10
    const skipIndex = (page - 1) * limit
    const  result = {}
    result.results = await Post.find().limit(limit).skip(skipIndex).exec()
    res.status(200).send(result)
})


exports.postInsert = asyncHandler((req, res,next) => {

    const { title, name, message, password } = req.body
    const post = new Post({title, name, message, password})
    post.save()
    return res.status(201).send(post)

})

exports.postUpdate = asyncHandler(async (req, res,next) => {
    const { title, name, message, password} = req.body
    const { id } = req.params
    const whiteList = filterUndefined({ title, name, message, password })
    const newPost = await Post.findByIdAndUpdate(id, whiteList, {new: true}).orFail().exec() 
    return res.send(newPost);
})

exports.postDelete = asyncHandler(async (req, res,next) => {
    const { id:_id } = req.params
    const {password} = req.body
    const post = await Post.findOne({_id}).orFail().exec()

    const hashedPass = post.password

    bcrypt.compare(password,hashedPass,function(err,result){

        if(result == false){
            res.status(401).send({message:"Password didn't match"})
        }else{

        post.deleteOne()
        
        return res.status(202).send({message:"Deleted successfully"})
    
        }

    })
    
    
})


