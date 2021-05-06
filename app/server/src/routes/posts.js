const express = require('express')
const router = express.Router()
const controller = require('../controllers/postController')
const {validator}  = require("../lib/validator")

router.get('/',controller.postIndex)
router.post('/',validator,controller.postInsert)
router.patch('/:id',validator,controller.postUpdate)
router.delete('/:id',controller.postDelete)

module.exports = router