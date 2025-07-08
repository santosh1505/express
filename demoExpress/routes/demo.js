const express = require('express')
const path = require('path')
const blog = require('../data/blog')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get('/blog', (req, res) => {
  blog.forEach(e => {
    console.log(e.title)
  });
  res.sendFile(path.join(__dirname, '../templates/blog.html'))
})

router.get('/blog/:slug', (req, res) => {
  myblog = blog.find((e)=>{
  return e.slug==req.params.slug
  })
  console.log(myblog),
  res.sendFile(path.join(__dirname, '../templates/blogs.html'))
})

module.exports=router