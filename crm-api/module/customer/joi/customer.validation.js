const Joi = require('joi');

module.exports = {
    creteCustomer: {
        body: Joi.object().required().keys({
            code: Joi.string().required(),
            firtname: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().required().email(),
            phone: Joi.string().required(),
            otherPhone: Joi.string().optional(),
            address: Joi.string().optional()
        })
    },
    createAddress: {
        body: Joi.object().required().keys({
            line1: Joi.string().required(),
            line2: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required(),
            postalCode: Joi.string().required(),
            country: Joi.string().required(),
        })
    },
    getCustomers: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    },
    editCustomers: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        }),
        body: Joi.object().required().keys({
            code: Joi.string().optional(),
            firtname: Joi.string().optional(),
            lastname: Joi.string().optional(),
            email: Joi.string().optional().email(),
            phone: Joi.string().optional(),
            otherPhone: Joi.string().optional(),
        })
    },
    editCustomerAddress: {

        body: Joi.object().required().keys({
            line1: Joi.string().optional(),
            line2: Joi.string().optional(),
            city: Joi.string().optional(),
            state: Joi.string().optional(),
            postalCode: Joi.string().optional(),
            country: Joi.string().optional(),
        })
    }
}