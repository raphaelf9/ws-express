const express = require('express')

const router = express.Router()

router.get('/', (req,res)=>{
  res.send('Pagina de clientes')
})

router.get('/lists', (req, res)=>{
  res.send('Pagina de lista de clientes')
})

router.get('/new',(req, res)=>{
  res.send('Pagina de cadastro de clientes')
})

module.exports = router