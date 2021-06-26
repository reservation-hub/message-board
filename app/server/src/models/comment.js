const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    name: String,
    text: String,
    password: String,
  },
  {
    timestamps: true,
  }
)

module.exports = commentSchema