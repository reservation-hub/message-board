const express = require('express')
const router = express.Router()
const controller = require('../controller/postController')

router.get('/', controller.postIndex)
router.get('/posts/:id', controller.postShow)
router.post('/posts', controller.postInsert)
router.patch('/posts/:id', controller.postUpdate)

module.exports = router