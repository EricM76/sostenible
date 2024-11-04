const express = require('express');
const router = express.Router();
const {planting} = require('../controllers/plantingController')

// /podcasts

router
    .get('/',planting)

module.exports = router