const router = require('express').Router()
const controller = require('../controllers/commentController')


router.post('/:postId/comment', controller.commentInsert)
router.patch('/:postId/comment/:commentId', controller.commentInsert)
router.delete('/:postId/comment/:commentId', controller.commentDelete)