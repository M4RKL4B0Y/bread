const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const Baker = require('../models/baker.js')

//INDEX
breads.get('/', (req, res) => {
  Bread.find()
    .then(foundBreads => {
      // console.log(foundBreads)
    
      res.render('index', {
        breads: foundBreads, // Pass foundBreads, not Bread
        title: 'Index Page'
      });
    })
    //In case route has trouble rendering
    // .catch(error => {
    //   console.error('Error fetching breads:', error);
    //   res.status(500).send('Internal Server Error'); // Handle error response
    // });
})

// NEW
breads.get('/new', (req, res) => {
  Baker.find()
      .then(foundBakers => {
          res.render('new', {
              bakers: foundBakers
          })
    })
})
// breads.get('/new', (req, res) => {
//     res.render('new')
// })

// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers => {
  Bread.findById(req.params.id)
    .then(foundBread => {
       res.render('edit', {
        bread: foundBread,
        bakers: foundBakers
          // index: req.params.indexArray
       })
    })
  })
})


// SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .populate('baker')
      .then(foundBread => {
        // const bakedBy = foundBread.getBakedBy()
        // console.log(bakedBy)
          res.render('Show', {
              bread: foundBread
          })
          
      })
   
})


  // CREATE
breads.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.push(req.body)
  res.redirect('/breads')
})

  

  
  // DELETE
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
  .then(deletedBread => {
    res.status(303).redirect('/breads')
  })
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedBread => {
      console.log(updatedBread)
    res.redirect(`/breads/${req.params.id}`)
    })
})


  

module.exports = breads

