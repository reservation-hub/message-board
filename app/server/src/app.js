require('dotenv').config()
const express = require('express')
const cors = require('cors')
const postRoutes = require('./routes/posts')
const db = require('./db/mongoose')
const app = express()
const errorHandler = require('./lib/errorHandler')


app.use(express.json())
app.use(cors())
app.use(postRoutes)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log('server is up')
})  