const Post = require('../models/post')
const asyncHandler = require('../lib/asyncHandler')
const { toJson } = require('../utils/utils')

exports.fetchByPage = asyncHandler(async (limit, skipIndex) => {
  const result = await Post.find().sort([['createdAt',-1]]).limit(limit).skip(skipIndex).exec()
  return result.map(post => toJson(post))
})

exports.updateById = asyncHandler(async (id, fields) => {
  const result = await Post.findByIdAndUpdate(id, fields, { new: true /* return new model */ }).orFail().exec()
  return toJson(result)
})

exports.createOne = asyncHandler(async (fields) => {
  const post = new Post(fields)
  post.save()
  return toJson(post)
})