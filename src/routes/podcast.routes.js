const express = require('express');
const router = express.Router();
const podcastController = require('../controllers/podcastController')

router.get('/podcast',podcastController.podcast)

module.exports = router