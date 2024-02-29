const Joi = require("joi");

const profileValidation = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Nama wajib diisi.",
  }),
  birthday: Joi.string().required().messages({
    "any.required": "Tanggal lahir wajib diisi.",
  }),
  phone_number: Joi.string().required().messages({
    "any.required": "No telepon wajib diisi.",
  }),
  address: Joi.string().optional(),
  bio: Joi.string().optional(),
  position: Joi.string().optional(),
});

module.exports = {
  profileValidation,
};
