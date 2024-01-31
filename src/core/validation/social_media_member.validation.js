const Joi = require("joi");

const socialMediaMemberValidation = Joi.object({
  user_id: Joi.string().required().messages({
    "any.required": "Member wajib diisi.",
  }),
  socmed_id: Joi.string().required().messages({
    "any.required": "Sosial media wajib diisi.",
  }),
  link: Joi.string().required().messages({
    "any.required": "Link wajib diisi.",
  }),
});

module.exports = {
  socialMediaMemberValidation,
};
