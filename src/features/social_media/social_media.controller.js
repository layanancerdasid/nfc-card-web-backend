const { validate } = require("../../core/validation");
const {
  socialMediaValidation,
} = require("../../core/validation/social_media.validation");
const { responseJSON, getURL, basePath } = require("../../helper/app");
const { errorBind, successMessage } = require("../../helper/message_response");
const {
  createSocMedService,
  updateSocMedService,
  deleteSocmedService,
} = require("./social_media.service");
const fs = require("fs");
const path = require("path");
const base64Img = require("base64-img");
const prisma = require("../../core/config/db");

const getAllSocMed = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const per_page = req.params.per_page || 10;
    const skip = (page - 1) * per_page;
    const result = await prisma.socialMedia.findMany({
      take: page,
      skip,
    });

    const resultCount = await prisma.socialMedia.count();

    const totalPage = Math.ceil(resultCount / per_page);

    return responseJSON(res, 200, successMessage.getSuccess, {
      page: page - 0,
      total_page: totalPage,
      total_data: resultCount,
      data: result,
    });
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const createSocMed = async (req, res) => {
  try {
    let imageURL = "";
    const payload = req.body;

    const errorValidation = validate(socialMediaValidation, payload);

    if (errorValidation !== null)
      return responseJSON(res, 400, errorValidation);
    await base64Img.img(
      payload.image,
      "./public/uploads/socmed",
      Date.now(),
      async function (err, filepath) {
        if (err) return responseJSON(res, 400, errorBind(err));

        const pathArr = filepath.split("/");
        const filename = pathArr[pathArr.length - 1];

        imageURL = `${getURL(req)}/uploads/socmed/${filename}`;

        payload.image = imageURL;

        await createSocMedService(payload);

        return responseJSON(res, 200, successMessage.saveSuccess, payload);
      }
    );
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const updateSocmed = async (req, res) => {
  try {
    const id = req.params.id;

    let imageURL = "";

    const payload = req.body;

    if (payload.old_image) {
      const splitOldImage = payload.old_image.split("/");

      const pathImgOld = path.join(
        basePath,
        "uploads/socmed",
        splitOldImage[5]
      );

      fs.unlinkSync(pathImgOld);

      await base64Img.img(
        payload.image,
        "./public/uploads/socmed",
        Date.now(),
        async function (err, filepath) {
          if (err) return responseJSON(res, 400, errorBind(err));

          const pathArr = filepath.split("/");
          const filename = pathArr[pathArr.length - 1];

          imageURL = `${getURL(req)}/${filename}`;

          payload.image = imageURL;

          const newPayload = {
            name: payload.name,
            link: payload.link,
            image: imageURL,
          };

          await updateSocMedService(newPayload, id);

          return responseJSON(res, 200, successMessage.updateSuccess, payload);
        }
      );
    } else {
      const newPayload = {
        name: payload.name,
        link: payload.link,
      };

      await updateSocMedService(newPayload, id);

      return responseJSON(res, 200, successMessage.updateSuccess, payload);
    }
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const deleteSocmed = async (req, res) => {
  try {
    const id = req.params.id;

    const socmed = await prisma.socialMedia.findFirst({
      where: {
        id: id,
      },
    });

    const splitOldImage = socmed.image.split("/");

    const pathImgOld = path.join(basePath, "uploads/socmed", splitOldImage[5]);

    fs.unlinkSync(pathImgOld);

    await deleteSocmedService(id);

    return responseJSON(res, 200, successMessage.deleteSuccess);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

module.exports = {
  getAllSocMed,
  deleteSocmed,
  createSocMed,
  updateSocmed,
};
