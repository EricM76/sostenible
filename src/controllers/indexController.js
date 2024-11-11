const {getData} = require('../data')

module.exports = {
    index : (req,res) => {
        const posts = getData("posts.json");
        return res.render('home', { posts })
    },
    admin : (req,res) => {
        const posts = getData("posts.json")
        return res.render('admin',{
            posts,

        })
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