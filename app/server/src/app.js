require('dotenv').config()
const express = require('express')
const cors = require('cors')
const postRoute = require('./controllers/postController')
const db = require('./db/mongoose')
const app = express()
const errorHandler = require('./lib/errorHandler')


app.use(express.json())
app.use(cors({
    origin: "http://localhost:8080"
}))
app.use(postRoute)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log('server is up')
})  