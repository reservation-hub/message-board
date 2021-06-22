const router = require('express').Router({mergeParams: true})
const Post = require('../models/post')
const asyncHandler = require("../lib/asyncHandler")
const { filterUndefined } = require('../../lib/filter')
const bcrypt = require('bcrypt')

router.post('/comment/', asyncHandler((req, res, next) => {
    const { name, text, password } = req.body
    const { postId } = req.params
    // const post = new Post({title, name, message, password})
    const post = Post.findOne({_id: postId})
    const hash = bcrypt.hashSync(password, 10)
    post.comment.push({name, text, password: hash})
    post.save()
    return res.send({id: postId, comment: {name, text}})
    // post.save()
    // return res.status(201).send(post)
}))

router.patch('/comment/:commentId', asyncHandler(async (req, res, next) => {
  const { title, name, message, password } = req.body
  const { id } = req.params
  const whiteList = filterUndefined({ title, name, message, password })
  const newPost = await Post.findByIdAndUpdate(id, whiteList, {new: true}).orFail().exec() 
  return res.send(newPost);
})) 

router.delete('/comment/:commentId', asyncHandler(async (req, res, next) => {
    const { id:_id } = req.params
    const {password} = req.body
    const post = await Post.findOne({_id}).orFail().exec()

    const hashedPass = post.password

    bcrypt.compare(password, hashedPass, function(err,result){
        if(result == false){
            res.status(401).send({message:"Password didn't match", id: _id})
        }else{

        post.deleteOne()
        
        return res.status(202).send({message:"Deleted successfully"})
    
        }
    })
}))

module.exports = router