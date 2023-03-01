const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
  res.send('Estamos online')
})

router.get('/pagina1', (req,res)=>{
  res.send('Pagina 01')
})

module.exports =  router
