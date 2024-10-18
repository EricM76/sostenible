const express = require('express');
const router = express.Router();
const {register, login, admin} = require('../controllers/adminController');

router.get('/register', register);
router.get('/login', login);
router.get('/admin', admin);

module.exports = router