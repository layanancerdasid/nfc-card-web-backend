const Joi = require("joi");

const socialMediaValidation = Joi.object({

    name: Joi.string().required().messages({
        'any.required': 'Nama wajib diisi.',
    }),
    link: Joi.string().required().messages({
        'any.required': 'Link wajib diisi.',
    }),
    image: Joi.string().required().messages({
        'any.required': 'Gambar wajib diisi.',
    })
})

module.exports = {
    socialMediaValidation
}
