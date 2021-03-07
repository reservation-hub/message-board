const express = require('express')
const bodyParser = require('body-parser')
const postRoutes = require('./routes/posts')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(postRoutes)

app.listen(8090, () => {
    console.log('server is up')
})