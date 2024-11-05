const express = require('express');
const router = express.Router();
const {list, detail} = require('../controllers/activitiesController')

// /activities

router
    .get('/',list)
    .get('/:activity_id',detail)


module.exports = router