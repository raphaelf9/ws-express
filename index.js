const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')
const calcRouter = require('./routes/calculadora')
console.log('views',path.join(__dirname, 'views'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewares
app.use('/', indexRouter)
app.use('/clients', clientsRouter)
app.use('/calculadora', calcRouter)
app.listen(port, ()=> console.log(`Online a partir da porta ${port}`))