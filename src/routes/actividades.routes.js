const express = require('express');
const router = express.Router();
const {lista, detail} = require('../controllers/actividadesController')

router
    .get('/',lista)
    .get('/:actividad_id',detail)


module.exports = router