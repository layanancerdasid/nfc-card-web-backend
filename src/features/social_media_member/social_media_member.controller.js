const { validate } = require("../../core/validation");

const { responseJSON } = require("../../helper/app");
const {
  errorBind,
  successMessage,
  isExist,
  notFound,
} = require("../../helper/message_response");
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

    const formattedData = result.map((socialMedia) => ({
      id: socialMedia.id,
      link: socialMedia.link,
      image: socialMedia.image,
      social_media: socialMedia.social_media,
    }));

    return responseJSON(res, 200, successMessage.getSuccess, formattedData);
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

    const isExistsSocmed = await prisma.socialMediaUser.findFirst({
      where: {
        user_id: payload.user_id,
        socmed_id: payload.socmed_id,
      },
    });

    if (isExistsSocmed != null) {
      return responseJSON(res, 400, isExist("Sosial media"));
    }

    const r = await prisma.socialMediaUser.create({
      data: payload,
    });

    return responseJSON(res, 200, successMessage.saveSuccess, r);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const updateSocmed = async (req, res) => {
  try {
    const payload = req.body;

    const id = req.params.id;

    const errorValidation = validate(socialMediaMemberValidation, payload);
    if (errorValidation !== null)
      return responseJSON(res, 400, errorValidation);

    const data = await prisma.socialMediaUser.findFirst({
      where: {
        id,
      },
    });

    if (data == null) return responseJSON(res, 400, notFound);

    const r = await prisma.socialMediaUser.update({
      where: {
        id,
      },
      data: payload,
    });

    return responseJSON(res, 200, successMessage.updateSuccess, r);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const deleteSocmed = async (req, res) => {
  try {
    const id = req.params.id;

    await prisma.socialMediaUser.delete({
      where: {
        id,
      },
    });

    return responseJSON(res, 200, successMessage.deleteSuccess);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

module.exports = {
  getAllSocMed,
  createSocMed,
  updateSocmed,
  deleteSocmed,
};
