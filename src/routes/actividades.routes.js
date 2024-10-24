const express = require('express');
const router = express.Router();
const actividadesController = require('../controllers/actividadesController');

router.get('/actividades', actividadesController.lista);

module.exports = router