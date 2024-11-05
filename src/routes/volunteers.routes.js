const express = require('express');
const router = express.Router();
const volunteersController = require('../controllers/volunteersController')

router.get('/', volunteersController.form)

module.exports = router