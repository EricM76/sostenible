const express = require('express');
const router = express.Router();
const plantandoController = require('../controllers/plantandoController')

router.get('/',plantandoController.plantando)

module.exports = router