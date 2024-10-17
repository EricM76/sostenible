const express = require('express');
const router = express.Router();
const {contact} = require('../controllers/contactController')

router.get('/contacto',contact)

module.exports = router