const {body,param} = require("express-validator");
const validators = {};

validators.createUserValidator = [
    body("username")
        .notEmpty().withMessage("nombres de usuarios vacíos no se permiten")
        .isLength({max:10}).withMessage("El username no debe sobrepasar los 10 caracteres"),
    body("email")
        .notEmpty().withMessage("Es requisito poner su correo")
        .isEmail().withMessage("Debe seguir los estándares de email"),
    body("name")
        .notEmpty().withMessage("Es requisito su nombre completo"),
    body("age")
        .optional().isInt().withMessage("Agregue solo valores enteros"),
    body("password")
        .notEmpty().withMessage("Su contraseña es indispensable")
        .isStrongPassword().withMessage("Su contraseña no es segura"),
    body("numberPets")
        .optional().isInt().withMessage("Agregue solo valores enteros"),
    body("publications")
        .optional().isInt().withMessage("agregue solo valores enteros")
]

validators.findUserValidator = [
    param("identifier")
        .notEmpty().withMessage("El identificador no debe estar vacío")
        .isMongoId().withMessage("El identificador debe ser id de mongo")
]

module.exports = validators;