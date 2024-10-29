const path = require ('path')

module.exports = {
    index : (req,res) => {

        return res.render('home')
    },
    admin : (req,res) => {

        return res.render('admin')
    },
    contacto : (req,res) => {
        return res.render('contacto')
    },
    plantando : (req,res) => {

        return res.render('plantandofuturo')
    },
    hub : (req,res) => {

        return res.render ('hubrecircular')
    },
    podcast : (req,res) => {

        return res.render ('podcast')
    },
    webinar : (req,res) => {

        return res.render ('webinar')
    },
    voluntariado : (req,res) => {

        return res.render ('voluntariado')
    }
}