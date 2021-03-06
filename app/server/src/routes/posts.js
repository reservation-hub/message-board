const express = require('express')
const router = express.Router()
const controller = require('../controller/postController')

router.get('/', controller.postIndex)

module.exports = router