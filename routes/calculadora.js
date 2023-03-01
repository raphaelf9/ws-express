const express = require('express')
const router = express.Router()

const calcController = require('../controllers/calculadora')

router.get('/', calcController.calc)
router.get('/number/:num',calcController.isPar) //parametro num1 não é opcional

module.exports = router