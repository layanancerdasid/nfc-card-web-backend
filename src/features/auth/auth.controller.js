const prisma = require("../../core/config/db");
const { responseJSON, hashJWTToken } = require("../../helper/app");
const jwt = require("jsonwebtoken");
const {
  payloadLoginWrong,
  emailNotVerified,
  cardNotConnected,
  errorBind,
  authMessage,
  notFound,
  successMessage,
} = require("../../helper/message_response");
const { checkAccountService } = require("./auth.service");
const bcrypt = require("bcryptjs");
const process = require("node:process");
const {
  profileValidation,
} = require("../../core/validation/profile.validation");
const { validate } = require("../../core/validation");

const loginMember = async (req, res) => {
  try {
    const payload = req.body;

    const user = await checkAccountService(payload);

    if (user === null) return responseJSON(res, 400, payloadLoginWrong);

    if (user.email_verified === null)
      return responseJSON(res, 400, emailNotVerified);

    const isVerifiedCard = await prisma.cardUser.findFirst({
      where: {
        user_id: user.id,
      },
    });

    if (isVerifiedCard.is_verified == false)
      return responseJSON(res, 400, cardNotConnected);

    const isVerifiedPwd = await bcrypt.compareSync(
      payload.password,
      user.password
    );

    if (!isVerifiedPwd) return responseJSON(res, 400, payloadLoginWrong);

    const profile = {
      id: user.id,
      name: user.name,
      email: user.email,
      birthday: user.birthday,
      address: user.address,
      role: "member",
      is_active: user.is_active,
    };
    const token = hashJWTToken(profile);

    return responseJSON(res, 200, authMessage.successLogin, {
      token,
      profile,
    });
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const loginAdmin = async (req, res) => {
  try {
    const payload = req.body;

    const account = await prisma.admin.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (account == null) return responseJSON(res, 400, notFound);

    const isVerifiedPwd = await bcrypt.compareSync(
      payload.password,
      account.password
    );

    if (!isVerifiedPwd) return responseJSON(res, 400, payloadLoginWrong);

    const profile = {
      id: account.id,
      email: account.email,
      name: account.name,
      role: "admin",
    };

    const token = hashJWTToken(profile);

    return responseJSON(res, 200, authMessage.successLogin, {
      token,
      profile,
    });
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const updateProfileMember = async (req, res) => {
  try {
    const payload = req.body;
    const token = req.headers.authorization?.split(" ")[1];

    const errorValidation = validate(profileValidation, payload);

    if (errorValidation !== null)
      return responseJSON(res, 400, errorValidation);

    jwt.verify(token, process.env.JWT_SECRET, async function (_, decoded) {
      const userRole = decoded.data;

      await prisma.user.update({
        where: {
          id: userRole.id,
        },
        data: payload,
      });
    });

    return responseJSON(res, 200, successMessage.updateSuccess, payload);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

module.exports = { loginMember, loginAdmin, updateProfileMember };
