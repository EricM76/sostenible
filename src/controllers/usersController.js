const {validationResult} = require('express-validator');
const {hashSync, compareSync} = require('bcryptjs');
const { getData, storeData } = require("../data");
const User = require('../models/User.js');

module.exports = {
    list: (req, res) => {

    },
    register: (req, res) => {
     return res.render ('register');
    },
    processRegister: async (req, res) => {
        const errors = validationResult(req);
        try {
            const { name, surname, email, pass,  } = req.body;
            
            if(errors.isEmpty()){

                const newUser = new User({
                    name: name.trim(),
                    surname: surname.trim(),
                    rol: "admin",
                    email: email.trim(),
                    pass: hashSync(pass, 12),
                })
                    await newUser.save()
             
                  return res.redirect('/users/login');
                }else{
                    return res.render('register',{
                        old : req.body,
                        errors : errors.mapped()
                    })
                }
        } catch (error) {
            console.log(error)
            return res.redirect('/error')
        }

      
    },
    login: (req, res) => {
        return res.render('login')
    },
    processLogin: async (req, res) => {
        try {
            const { email, pass } = req.body;

            const user = await User.findOne({
                email,
              });

              if (user && compareSync(pass, user.pass)) {
                req.session.userLogin = {
                  id: user.id,
                  name: user.name,
                  rol: user.rol,
                };
        
                return res.redirect("/admin")
              } else {
                return res.render('login', {
                    msg: "Credenciales inválidas"
                })
              }

        } catch (error) {
            console.log(error)
            return res.redirect('/error')
        }


    },
    logout : (req,res) =>{
        req.session.destroy()
        return res.redirect('/')
    }
}