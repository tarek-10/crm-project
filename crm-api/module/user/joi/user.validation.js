const Joi = require('joi');

module.exports = {

    createUser: {
        body: Joi.object().required().keys({
            username: Joi.string().required(),
            email: Joi.string().required().email(),
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            password: Joi.string().min(3).max(15).required().label('Password'),
            password_confirmation: Joi.any().equal(Joi.ref('password'))
                .required()
                .label('Confirm password')
                .options({
                    messages: {
                        'any.only': '{{#label}} does not match'
                    }
                }),
            phone: Joi.string().required(),
            ohterPhone: Joi.string().optional(),
        }),
        files: Joi.object().required()
    },
    editUser: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        }),
        body: Joi.object().optional().keys({
            username: Joi.string().optional(),
            email: Joi.string().optional().email(),
            firstname: Joi.string().optional(),
            lastname: Joi.string().optional(),
            password: Joi.string().min(3).max(15).optional().label('Password'),
            password_confirmation: Joi.any().equal(Joi.ref('password'))
                .optional()
                .label('Confirm password')
                .options({
                    messages: {
                        'any.only': '{{#label}} does not match'
                    }
                }),
            phone: Joi.string().optional(),
            ohterPhone: Joi.string().optional(),
        })
    },
    signInUser: {
        body: Joi.object().required().keys({
            username: Joi.string().required(),
            password: Joi.string().required()
        })
    },
    deactiveUser: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    },
    activeUser: {
        params: Joi.object().required().keys({
            id: Joi.string().required()
        })
    }
}