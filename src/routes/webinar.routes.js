const express = require('express');
const router = express.Router();
const webinarController = require('../controllers/webinarController');

router.get('/webinar',webinarController.webinar)

module.exports = router