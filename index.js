const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

//middlewares
app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen(port, ()=> console.log(`Online a partir da porta ${port}`))