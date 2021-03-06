const express = require('express')

const postRoutes = require('./routes/posts')

const app = express()

app.use(postRoutes)

app.listen(8090, () => {
    console.log('server is up')
})