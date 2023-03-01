const express = require('express')
const router = express.Router()

const calcController = require('../controllers/calculadora')

router.get('/', calcController.calc)

module.exports = router