const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
    //validación de parámetros (de forma genérica)
    //lo que hace esta función es verificar parámetro por parámetro que cumplas con las condiciones establecidas, si hay algún error
    //entonces notificará el por qué de ese error, y dónde se encuentra.
    const errors = validationResult(req);
    //verificar que hay error
        if(!errors.isEmpty()){
            //retorno 400
            return res.status(400).json({
                errors: errors.array().map( error => ({
                    field: error.param,
                    message: error.msg
                })) //este método devuelve un arreglo que muestra el atributo y el error que ha tenido
            });
        }

    //pasó al siguiente middleware
    next();
}