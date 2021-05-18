const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        name: {
            type: String,
        },
        message: {
            type: String,
        },
        password:{
            type:String,
        }
    }, {
        timestamps: true,
    })

postSchema.pre("save", async function (req,res,next) {
    try {
        const salt = await bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password,salt)
        next()
    } catch {
        res.status(500).send("internal server error")
    }
})

postSchema.pre('findOneAndUpdate', async function () {
    const salt = await bcrypt.genSalt()

    this._update.password = await bcrypt.hash(this._update.password,salt)
  })

const Post = mongoose.model('Post', postSchema)

module.exports = Post