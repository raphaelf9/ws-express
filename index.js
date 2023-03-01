const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')
const calcRouter = require('./routes/calculadora')

//middlewares
app.use('/', indexRouter)
app.use('/clients', clientsRouter)
app.use('/calculadora', calcRouter)
app.listen(port, ()=> console.log(`Online a partir da porta ${port}`))