// import modules

import express from 'express'

import { vsts } from './data/vst-data.js'

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)

app.get('/', function(req,res) {
  res.redirect('/home')
})

// Mount routes

app.get('/home', function(req,res) {
  res.send('home')
})

app.get('/vsts', function(req,res) {
  res.render('vsts/index', {
    myVsts: vsts
  })
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})