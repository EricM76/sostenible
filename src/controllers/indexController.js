const {getData} = require('../data');
const Post = require('../models/Post.js');
const { format } = require('date-fns');
const { es } = require('date-fns/locale');

module.exports = {
    index : async (req,res) => {
        try{
        const posts = await Post.find().sort({date : 1})
        return res.render('home', { posts })
        }
        catch (error) {
            console.log(error);
            return res.redirect("/error");
        }},
    admin : async (req,res) => {

        try {
            const posts = await Post.find().populate('category').populate('campaign')
            posts.forEach(post => {
                if (post.date) {
                post.formattedDate = format(new Date(post.date), "EEEE dd 'de' MMMM", { locale: es });
                }
              });
        
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