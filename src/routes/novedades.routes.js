const express = require('express');
const router = express.Router();
const {lista, detail} = require('../controllers/novedadesController')

router
    .get('/',lista)
    .get('/:novedad_id',detail)


module.exports = router