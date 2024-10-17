const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactoController')

router.get('/contacto',contactController.contact)

module.exports = router