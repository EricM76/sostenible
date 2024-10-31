const express = require('express');
const router = express.Router();
const {index,about,admin,contact} = require('../controllers/indexController')

router
    .get('/',index)   
    .get('/admin', admin)
    .get('/about',about)
    .get('/contact',contact)


module.exports = router