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

commentSchema.methods.toJson = function() {
  const model = this.toObject()
  delete model.password
  return model
}

module.exports = commentSchema