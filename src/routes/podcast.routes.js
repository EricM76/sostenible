const express = require('express');
const router = express.Router();
const {podcast} = require('../controllers/podcastController')

router.get('/podcast',podcast)

module.exports = router