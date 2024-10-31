const express = require('express');
const router = express.Router();
const webinarController = require('../controllers/webinarController');


// /webinars

router
    .get('/',webinarController.webinar)

module.exports = router