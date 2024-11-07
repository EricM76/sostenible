const { check, body } = require("express-validator");
const {getData} = require('../data')
const users = getData('users.json')

module.exports = [
  check("name")
    .notEmpty()
    .withMessage("El nombre es obligatorio").bail()
    .isAlpha()
    .withMessage("Solo caracteres alfabéticos"),
    check("surname")
    .notEmpty()
    .withMessage("El apellido es obligatorio").bail()
    .isAlpha()
    .withMessage("Solo caracteres alfabéticos"),
  body("email")
    .notEmpty()
    .withMessage("El email es obligatorio").bail()
    .isEmail()
    .withMessage("Debe ser un email válido").bail()
    .custom((value, {req}) => {
        const user = users.find(user => user.email == value)
        if(user){
            return false
        }
        return true
    }).withMessage("El email ya se encuentra registrado"),
  check("pass")
    .notEmpty().withMessage("La contraseña es obligatoria").bail()
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/).withMessage('Debe tener una mayúscula, minúscula, caracter especial y un número. Mínimo 8 caracteres'),
  body("pass2")
  .notEmpty().withMessage("Reingresá tu contraseña").bail()
  .custom((value, { req }) => {
    if (value !== req.body.pass) {
      return false
    }
    return true;
  })
  .withMessage('Las contraseñas no coinciden'),
];