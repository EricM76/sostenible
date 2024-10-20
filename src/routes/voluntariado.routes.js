const express = require('express');
const router = express.Router();
const voluntariadoController = require('../controllers/voluntariadoController')

router.get('/voluntariado', voluntariadoController.form)

module.exports = router