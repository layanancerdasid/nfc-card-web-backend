const Joi = require("joi");

const verifyEmailValidation = Joi.object({

    email: Joi.string().email().required().messages({
        'any.required': 'Email wajib diisi.',
        'string.email': 'Format email tidak valid.',
    }),
    otp: Joi.string().required().messages({
        'any.required': 'Otp wajib diisi.',
    })
})

module.exports = {
    verifyEmailValidation
}
