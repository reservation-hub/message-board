const Post = require('../models/post')
const asyncHandler = require("../lib/asyncHandler")
const { filterUndefined } = require('../../lib/filter')
const ErrorResponse = require("../utils/errorResponse")
const bcrypt = require('bcrypt')

exports.postIndex = async (req, res, next) => {
  try {
    const posts = await Post.find({})
    return res.send(posts)
  } catch (e) {next(e)}
}

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
  const {password} = req.body
  await Post.findOne({_id}).orFail().exec()
  .then(data=>{
    const hashedPass = data.password
    bcrypt.compare(password,hashedPass,function(err,result){
      if(result == false){
        res.status(401).send({message:"Password didn't match"})
      }else{
        data.deleteOne()
        .then(res.status(202).send({message:"Deleted successfully"}))
      }
    })
  })
})