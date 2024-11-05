
const express = require('express');
const router = express.Router();
const { register, processLogin, processRegister, login, list } = require('../controllers/usersController');
const usersController = require('../controllers/usersController');
const registerValidator = require('../validations/registerValidator')

// /users
router
    .get('/',list)
    .get('/register',usersController.register)
    .get('/login',usersController.login)
    .post('/register',registerValidator,usersController.processRegister)
    .post('/login',usersController.processLogin)
    .get('/logout',usersController.logout)

module.exports = router

