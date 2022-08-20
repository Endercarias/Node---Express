const express = require('express')
const route = require('express').Router()

const app = express()

app.use(express.json())

const html = route.get('/index.html',(req, res, next)=>{
  res.sendFile('index.html', {root:__dirname});
})

app.use('/api',html)

app.listen(3000,()=> {
  console.log('listening on port 3000');
})