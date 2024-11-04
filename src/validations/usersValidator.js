const { check } = require("express-validator");
module.exports = [
    check("name")
      .notEmpty()
      .withMessage("El nombre es obligatorio"),
    check("surname")
      .notEmpty()
      .withMessage("El apellido es requerido"),
    check("email")
    .not
    ]