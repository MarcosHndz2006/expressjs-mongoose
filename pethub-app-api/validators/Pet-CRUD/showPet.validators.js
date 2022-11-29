const { body } = require('express-validator');
const validators = {};

validators.findById = [
    body("identifier")
        .notEmpty().withMessage("el campo de identificador no debe estar vacío")
]

module.exports = validators;