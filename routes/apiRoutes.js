// setup basic const for route file
const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

// HANDLE GET REQUEST FROM CLIENT GET REQUEST

router.get('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (error, data)=> {
    if (error) {
      res.status(500).json('500')
      console.log('sucks to suck')
    }
    res.json(JSON.parse(data))
  })
})


// HANDLE POST REQUEST FROM CLIENT POST REQUEST

router.post('/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (error, data)=> {
    if (error) {
      res.status(500).json('500')
      console.log('sucks to suck')
    }
    let newData = JSON.parse(data)
     newData.push({...req.body, id:uuidv4()})
    fs.writeFile('./db/db.json', JSON.stringify(newData), (error) => {
      if (error) {
        res.status(500).json('500')
      }
      res.json(req.body)
    })
  })
})



router.delete('/notes/:id', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (error, data)=> {
    if (error) {
      res.status(500).json('500')
      console.log('sucks to suck')
    }
    let newData = JSON.parse(data)
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === req.params.id) {
        newData.splice(i,1)
      }

    }
    fs.writeFile('./db/db.json', JSON.stringify(newData), (error) => {
      if (error) {
        res.status(500).json('500')
      }
      res.json(req.body)
    })
  })
})

module.exports = router

