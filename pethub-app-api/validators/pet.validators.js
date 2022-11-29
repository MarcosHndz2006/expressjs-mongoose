const {body} = require("express-validator");
const validators = {};

validators.createPetValidator = [
    body("name")
        .notEmpty().withMessage("no debe contener un id vacío"),
    body("name")
        .notEmpty().withMessage("no debe tener mascotas sin nombre"),
    body("type")
        .notEmpty().withMessage("especifique el tipo de animal que posee"),
    body("breed")
        .notEmpty().withMessage("Coloque la raza del animal"),
    body("publications")
        .optional().isInt().withMessage("Coloque solamente valores enteros")
]

module.exports = validators;