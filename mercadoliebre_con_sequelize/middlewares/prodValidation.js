const {check, validationResult, body} = require('express-validator');

let validator = {
    middNext: function(req, res,next){
        next()
    },
    prodValidation: [ 
        body().custom(function(req){
            if(req.nombre == ""){
                return false;
            } else {
                return true;
            }
        }).withMessage('El nombre del producto es obligatorio'),
        body().custom(function(req){
            if(req.description == ""){
                return false;
            } else {
                return true;
            }
        }).withMessage('La descripción del producto es obligatoria'),
        check('price')
            .exists().withMessage('El precio del producto es obligatorio')
            .trim()
            .isNumeric().withMessage('El precio debe ser un valor numérico'),
    ]
}

module.exports = validator;