const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const {activities, posts, detail, add, create, edit, update, destroy} = require('../controllers/postsController');
const checkAdmin = require ('../middlewares/checkAdmin');

// /posts

router
    .get('/', posts)
    .get('/add',checkAdmin, add)
    .post('/add',upload.single('image'),create)
    .get('/edit/:post_id',checkAdmin,edit)
    .put('/update/:post_id',upload.single('image'),update)
    .delete('/destroy/:post_id',destroy)

    .get('/activities', activities)
    .get('/:post_id',detail)
    


module.exports = router