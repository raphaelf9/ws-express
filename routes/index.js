const express = require('express')
const router = express.Router()

const indexController = require('../controllers/index')

router.get('/', indexController.main )
router.get('/pagina1',indexController.p1 )

module.exports =  router
