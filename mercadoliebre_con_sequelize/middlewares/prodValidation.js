const {check, validationResult, body} = require('express-validator');

let validator = {
    middNext: function(req, res,next){
        next()
    },
    prodValidation: [
        check('name')
            .exists().withMessage('El nombre del producto es obligatorio')
            .trim(),
        check('descrption')
            .exists().withMessage('La descripción del producto es obligatoria')
            .trim(),
        check('price')
            .exists().withMessage('El precio del producto es obligatorio')
            .trim()
            .isNumeric().withMessage('El precio debe ser un valor numérico'),
        check('discount')
            .isNumeric().withMessage('El descuento debe ser un valor numérico'),
    ]
}

module.exports = validator;