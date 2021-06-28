const router = require('express').Router({mergeParams: true})
const Post = require('../models/post')
const asyncHandler = require("../lib/asyncHandler")
const { filterUndefined } = require('../../lib/filter')
const { toJson } = require('../utils/utils')
const bcrypt = require('bcrypt')
const { commentValidator } = require('../lib/validator')

router.post('/comment/', commentValidator, asyncHandler(async (req, res, next) => {
    const { name, text, password } = req.body
    const { postId } = req.params
    const post = await Post.findOne({_id: postId})
    const hash = bcrypt.hashSync(password, 10)
    let comment = post.comments.create({name, text, password: hash})
    post.comments.push(comment)
    post.save()
    comment = toJson(comment)
    return res.send({ postId, comment })
    // TODO 転送するデータ要検討
}))

router.patch('/comment/:commentId', commentValidator, asyncHandler(async (req, res, next) => {
  const { name, text, password } = req.body
  const { postId, commentId } = req.params
  const whiteList = filterUndefined({ name, text })
  let post = await Post.findOne({ _id: postId })
  let error
  post.comments.map(item => {
    if (item._id.toString() === commentId) {
      if (!bcrypt.compareSync(password, item.password)) error = { message: "Password did not match!", code: 403, _id: item._id }
      Object.assign(item, whiteList) 
      return item
    }
  })
  if (error !== undefined) return next(error)
  post.save()
  post = toJson(post)
  post.comments = post.comments.map(comment => toJson(comment))
  return res.send(post)
})) 

router.delete('/comment/:commentId', asyncHandler(async (req, res, next) => {
    const { postId, commentId } = req.params
    const { password } = req.body
    const post = await Post.findOne({ _id: postId }).orFail().exec()
    let error
    post.comments = post.comments.filter(item => {
      if (item._id.toString() === commentId) {
        if (!bcrypt.compareSync(password, item.password)) {
          error = { message: "Password did not match!", code: 403, _id: item.id }
          return item
        } else {
          item.deleteOne()
        }
      }
    })
    if (error !== undefined) return next(error)
    post.save()
    return res.send({message: "Deleted successfully"})
}))

module.exports = router