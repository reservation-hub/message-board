const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Success')
})

app.listen(8090, () => {
    console.log('server is up')
})