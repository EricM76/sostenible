const express = require('express');
const router = express.Router();
const {hub} = require('../controllers/hubController')

// /podcasts

router
    .get('/',hub)

module.exports = router