const {validationResult} = require('express-validator');
const {hashSync, compareSync} = require('bcryptjs');
const { getData, storeData } = require("../data");

module.exports = {
    list: (req, res) => {

    },
    register: (req, res) => {
     return res.render ('register');
    },
    processRegister: (req, res) => {
        const errors = validationResult(req);
        const users = getData("users.json"); 
        const { name, surname, email, pass,  } = req.body;

        if(errors.isEmpty()){
        const newUser = {
            id: +users[users.length - 1].id + 1,
            name: name.trim(),
            surname: surname.trim(),
            rol: "admin",
            email: email.trim(),
            pass: hashSync(pass, 12),
          }; 

          users.push(newUser);

          storeData(users, "users.json");
          return res.redirect('/');
        }else{
            return res.render('register',{
                old : req.body,
                errors : errors.mapped()
            })
        }
    },
    login: (req, res) => {
        return res.render('login')
    },
    processLogin: (req, res) => {
        const users = getData('users.json');

        const { email, pass } = req.body;

        const user = compareSync(user => user.email == email)

        if (user && user.pass == pass) {
            req.session.userLogin = {
                id: user.id,
                name: user.name,
                rol :  user.rol

            }

            return res.redirect('/')
        } else {
            return res.render('login', {
                msg: "Credenciales inválidas"
            })
        }
    },
    logout : (req,res) =>{
        req.session.destroy()
        return res.redirect('/')
    }
}