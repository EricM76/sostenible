const express = require('express');
const router = express.Router();
const {index,contacto,plantando,hub,podcast,admin,webinar,voluntariado} = require('../controllers/indexController')

router.get('/',index)
router.get('/contacto',contacto)
router.get('/plantandofuturo',plantando)
router.get('/hubrecircular',hub)
router.get('/podcast',podcast)
router.get('/admin',admin)
router.get('/webinar',webinar)
router.get('/voluntariado',voluntariado)

module.exports = router