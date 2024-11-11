const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const checkAdmin = require ('../middlewares/checkAdmin');


router
    .get('/',indexController.index)   
    .get('/admin',checkAdmin, indexController.admin)
    .get('/about',indexController.about)
    .get('/contact',indexController.contact)
    .get('/error', indexController.error)

module.exports = router