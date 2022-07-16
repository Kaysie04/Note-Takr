const express = require('express')
const router = express.Router()

router.post('/api/notes', (req, res) => {
    console.log('req.body')
    res.json(req.body)  
  });








module.exports = router

