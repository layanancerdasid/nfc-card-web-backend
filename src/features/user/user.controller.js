const prisma = require("../../core/config/db");
const { validate } = require("../../core/validation");
const {
  registerValidation,
} = require("../../core/validation/register.validation");
const {
  verifyCardValidation,
} = require("../../core/validation/verify_card.validation");
const {
  verifyEmailValidation,
} = require("../../core/validation/verify_email.validation");
const {
  responseJSON,
  hashPassword,
  toISODate,
  decodeJWTToken,
} = require("../../helper/app");
const {
  successMessage,
  notFound,
  errorBind,
  emailWasUsed,
  wrongOtp,
  otpWasSend,
  fieldNotFound,
  emailVerified,
  cardVerified,
  wrongPwd,
  successChangePwd,
} = require("../../helper/message_response");

const bcrypt = require("bcryptjs");

const {
  registerService,
  verifyEmailService,
  checkEmailService,
  checkOtpService,
  requestOtpService,
  verifyCardService,
} = require("../user/user.service");

const getAllUser = async (req, res) => {
  try {
    responseJSON(res, 200, "OKE");
  } catch (error) {
    responseJSON(res, 500, "TIDAK OKE");
  }
};

const register = async (req, res) => {
  try {
    const payload = req.body;

    const errorValidation = validate(registerValidation, payload);

    if (errorValidation !== null)
      return responseJSON(res, 400, errorValidation);

    const existsEmail = await checkEmailService(payload);

    if (existsEmail !== null) return responseJSON(res, 400, emailWasUsed);

    payload.password = hashPassword(payload.password);

    payload.birthday = toISODate(payload.birthday);

    const register = await registerService(payload);

    if (register === null) {
      return responseJSON(res, 400, fieldNotFound("Nomor Kartu"));
    }

    //kirim otp ke email//

    return responseJSON(res, 200, successMessage.saveSuccess, register);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const verifyEmail = async (req, res) => {
  try {
    const payload = req.body;

    const errorValidation = validate(verifyEmailValidation, payload);

    if (errorValidation !== null)
      return responseJSON(res, 400, errorValidation);

    const checkEmail = await checkEmailService(payload);

    if (checkEmail === null) return responseJSON(res, 400, notFound);

    const checkOtp = await checkOtpService(payload);

    if (checkOtp === null) return responseJSON(res, 400, wrongOtp);

    await verifyEmailService(payload);

    return responseJSON(res, 200, emailVerified);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const verifyCard = async (req, res) => {
  try {
    const payload = req.body;

    const errorValidation = validate(verifyCardValidation, payload);

    if (errorValidation !== null)
      return responseJSON(res, 400, errorValidation);

    await verifyCardService(payload);

    return responseJSON(res, 200, cardVerified);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const requestOtp = async (req, res) => {
  try {
    const payload = req.body;

    const checkEmail = await checkEmailService(payload);

    if (checkEmail === null) return responseJSON(res, 400, notFound);

    await requestOtpService(payload);

    return responseJSON(res, 200, otpWasSend, {});
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const changePasswordFromForgot = async (req, res) => {
  try {
    const payload = req.body;

    const user = await prisma.user.findFirst({
      where: {
        otp: payload.otp,
      },
    });

    const validOtp = await prisma.user.findFirst({
      where: {
        id: user.id,
      },
    });

    if (validOtp == {}) return responseJSON(res, 400, wrongOtp);

    const isVerifiedPwd = await bcrypt.compareSync(
      payload.old_password,
      user.password
    );

    if (!isVerifiedPwd) return responseJSON(res, 400, wrongPwd);

    payload.password = hashPassword(payload.password);

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: payload.password,
        otp: null,
      },
    });
    return responseJSON(res, 200, successChangePwd);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

const changePassword = async (req, res) => {
  try {
    const payload = req.body;
    const headers = req.headers;
    const token = decodeJWTToken(headers.authorization.split(" ")[1]);

    const user = await prisma.user.findFirst({
      where: {
        id: token.data.id,
      },
    });

    const isVerifiedPwd = await bcrypt.compareSync(
      payload.old_password,
      user.password
    );

    if (!isVerifiedPwd) return responseJSON(res, 400, wrongPwd);

    payload.password = hashPassword(payload.password);

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: payload.password,
        otp: null,
      },
    });
    return responseJSON(res, 200, successChangePwd);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

module.exports = {
  changePassword,
  changePasswordFromForgot,
  verifyCard,
  getAllUser,
  register,
  verifyEmail,
  requestOtp,
};
