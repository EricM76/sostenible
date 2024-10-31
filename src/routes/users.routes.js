
const express = require('express');
const router = express.Router();
const { register, processLogin, processRegister, login, list } = require('../controllers/usersController');

// /users
router
    .get('/',list)
    .get('/register', register)
    .get('/login', login)
    .post('/register', processRegister)
    .post('/login', processLogin)

module.exports = router

