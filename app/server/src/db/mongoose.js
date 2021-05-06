const mongoose = require('mongoose')
const { DB_HOST, dbOptions } = require('./config')
const dbHandle = mongoose.connect(DB_HOST, dbOptions)

module.exports = dbHandle

