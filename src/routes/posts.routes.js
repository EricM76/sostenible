const express = require('express');
const router = express.Router();
const {list, detail} = require('../controllers/postsController')

// /posts

router
    .get('/',list)
    .get('/:post_id',detail)


module.exports = router