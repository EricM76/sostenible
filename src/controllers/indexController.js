const {getData} = require('../data');
const Post = require('../models/Post.js');

module.exports = {
    index : (req,res) => {
        const posts = getData("posts.json");
        return res.render('home', { posts })
    },
    admin : async (req,res) => {

        try {
            const posts = await Post.find().populate('category').populate('campaign')
            return res.render('admin',{
                posts,
    
            })
        } catch (error) {
            console.log(error)
            return res.redirect('/error')
        }
       
    },
    about : (req,res) => {
        return res.render('about')
    },
    contact : (req,res) => {
        return res.render('contact')
    },
    error : (req,res) => {
        return res.render('error')
    }
}