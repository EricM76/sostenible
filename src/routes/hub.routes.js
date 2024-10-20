const express = require('express');
const router = express.Router();
const hubController = require('../controllers/hubController')

router.get('/hubrecircular', hubController.hub)

module.exports = router