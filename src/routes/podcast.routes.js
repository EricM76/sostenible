const express = require('express');
const router = express.Router();
const {podcast} = require('../controllers/podcastController')

// /podcasts

router
    .get('/',podcast)

module.exports = router