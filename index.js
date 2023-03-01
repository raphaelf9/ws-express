const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res)=>{
  res.send('Estamos Online!')
})

app.get('/pag1', (req, res)=>{
  res.send('Página 01')
})

app.get('/clientes/list', (req, res)=>{
  res.send('Lista de clientes')
})

app.get('/clientes/new', (req,res)=>{
  res.send('Cadastro de clientes!')
})

app.listen(port, ()=> console.log(`Online a partir da porta ${port}`))