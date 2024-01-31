const { validate } = require("../../core/validation");

const { responseJSON } = require("../../helper/app");
const { errorBind, successMessage } = require("../../helper/message_response");
const prisma = require("../../core/config/db");
const {
  socialMediaMemberValidation,
} = require("../../core/validation/social_media_member.validation");

const getAllSocMed = async (req, res) => {
  try {
    const result = await prisma.socialMediaUser.findMany({
      where: {
        user_id: req.params.id,
      },
      include: {
        social_media: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    // const formattedData = result.map((socialMedia) => ({
    //   id: socialMedia.id,
    //   name: socialMedia.name,
    //   link: socialMedia.link,
    //   image: socialMedia.image,
    //   created_at: socialMedia.created_at,
    //   updated_at: socialMedia.updated_at,
    //   social_media_user: socialMedia.SocialMediaUser[0],
    // }));

    return responseJSON(res, 200, successMessage.getSuccess, result);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const createSocMed = async (req, res) => {
  try {
    const payload = req.body;

    const errorValidation = validate(socialMediaMemberValidation, payload);

    if (errorValidation !== null)
      return responseJSON(res, 400, errorValidation);

    const r = await prisma.socialMediaUser.create({
      data: payload,
    });

    return responseJSON(res, 200, "OK", r);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

module.exports = {
  getAllSocMed,
  createSocMed,
};
