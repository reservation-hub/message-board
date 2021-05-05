const express = require('express')
const router = express.Router()
const controller = require('../controllers/postController')

router.get('/', controller.postIndex)
router.post('/', controller.postInsert)
router.get('/:id', controller.postShow)
router.patch('/:id', controller.postUpdate)
router.delete('/:id', controller.postDelete)

module.exports = router