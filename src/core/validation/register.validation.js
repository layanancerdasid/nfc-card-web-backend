const Joi = require("joi");

const registerValidation = Joi.object({
    name: Joi.string().max(50).required().messages({
        'any.required': 'Nama wajib diisi.',
        'string.max': 'Panjang nama tidak boleh melebihi 50 karakter.',
    }),
    birthday: Joi.date().iso().required().messages({
        'any.required': 'Tanggal lahir wajib diisi.',
        'date.iso': 'Format tanggal lahir tidak valid.',
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'Email wajib diisi.',
        'string.email': 'Format email tidak valid.',
    }),
    password: Joi.string().min(6).required().messages({
        'any.required': 'Password wajib diisi.',
        'string.min': 'Panjang password minimal 6 karakter.',
    }),
    address: Joi.string().required().messages({
        'any.required': 'Alamat wajib diisi.',
    }),
})

module.exports = {
    registerValidation
}
