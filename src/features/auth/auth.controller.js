const prisma = require("../../core/config/db");
const { responseJSON, hashJWTToken } = require("../../helper/app");
const {
  payloadLoginWrong,
  emailNotVerified,
  cardNotConnected,
} = require("../../helper/message_response");
const { checkAccountService } = require("./auth.service");
const bcrypt = require("bcryptjs");

const loginMember = async (req, res) => {
  try {
    const payload = req.body;

    const user = await checkAccountService(payload);

    if (user === null) return responseJSON(res, 400, payloadLoginWrong);

    if (user.email_verified === null)
      return responseJSON(res, 400, emailNotVerified);

    const isVerifiedCard = await prisma.cardUser.findFirst({
      email: payload.email,
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
      is_active: user.is_active,
    };
    const token = hashJWTToken(profile);

    return responseJSON(res, 200, "OKE", {
      token,
      profile,
    });
  } catch (error) {
    return responseJSON(res, 500, error.message);
  }
};

module.exports = { loginMember };
