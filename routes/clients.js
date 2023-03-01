const express = require('express')
const router = express.Router()

const clientsController = require('../controllers/clients')

router.get('/', clientsController.clients)

router.get('/lists',clientsController.list)

router.get('/new',clientsController.novo)

module.exports = router