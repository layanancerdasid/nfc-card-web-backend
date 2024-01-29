const Joi = require("joi");

const verifyCardValidation = Joi.object({

    card_number: Joi.string().required().messages({
        'any.required': 'No kartu wajib diisi.',
    }),
    serial_number: Joi.string().required().messages({
        'any.required': 'No seri wajib diisi.',
    })
})

module.exports = {
    verifyCardValidation
}
