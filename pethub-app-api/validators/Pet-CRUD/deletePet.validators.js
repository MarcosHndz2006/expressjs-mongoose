const {body} = require("express-validator");
const validators = {};

validators.deletePetValidators = [
    body("identifier")
        .notEmpty().withMessage("por favor ingrese un identificador para poder eliminar una mascota")
]

module.exports = validators;