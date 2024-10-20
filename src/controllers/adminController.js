const path = require ('path')

module.exports = {
    admin : (req,res) => {

        return res.render('admin')},
    login : (req,res) => {

        return res.render('login')
    },
    register : (req,res) => {
        return res.render ('register')
    }
}