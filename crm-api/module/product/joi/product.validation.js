const Joi = require('joi');
module.exports = {

    createProduct: {
        body: Joi.object().required().keys({
            productCode: Joi.string().required(),
            productName: Joi.string().required(),
            productDesc: Joi.string().optional(),
            productUnitPrice: Joi.number().required(),
            productUnit: Joi.string().required()
        })
    },
    editProduct: {
        body: Joi.object().required().keys({
            productCode: Joi.string().optional(),
            productName: Joi.string().optional(),
            productDesc: Joi.string().optional(),
            productUnitPrice: Joi.number().optional(),
            productUnit: Joi.string().optional()
        })
    }
}