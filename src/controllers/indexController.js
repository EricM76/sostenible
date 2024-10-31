const {getData} = require('../data')

module.exports = {
    index : (req,res) => {

        return res.render('home')
    },
    admin : (req,res) => {

        return res.render('admin')
    },
    about : (req,res) => {
        return res.render('about')
    },
    contact : (req,res) => {
        return res.render('contact')
    }
}