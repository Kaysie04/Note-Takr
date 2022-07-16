const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log('server is running')
    res.send("lets get started")
})










app.listen(3000)