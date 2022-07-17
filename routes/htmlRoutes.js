
// setup basic requirements for a route file
const express = require('express')
const router = express.Router()
const path = require("path")


// handle get request to display main page
router.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// handle get request to display notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})



module.exports = router

