var bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const { randomBytes } = require("node:crypto");

const path = require("path");

const process = require("node:process");

const nodeMailer = require("nodemailer");
const { htmlTemplate } = require("./template_send_email");

const secret = process.env.JWT_SECRET;
const baseUrl = (req) => {
  return req.protocol + "://" + req.get("host");
};
const responseJSON = (res, code, msg, data = {}) => {
  return res.status(code).send({
    code: code ?? 200,
    msg: msg ?? "",
    data: data ?? {},
  });
};

const getURL = (req) => {
  return req.protocol + "://" + req.get("host");
};

const basePath = path.join(
  // eslint-disable-next-line no-undef
  __dirname,
  "../../public"
);

const generateOTP = () => {
  let randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

  let otpString = randomNumber.toString();

  while (otpString.length < 6) {
    otpString = "0" + otpString;
  }

  return otpString;
};

const hashPassword = (str) => {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(str, salt);
};

const toISODate = (date) => {
  return new Date(date).toISOString();
};

const hashJWTToken = (data) => {
  const expirationTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24;
  return jwt.sign(
    {
      exp: expirationTime,
      data: {
        id: data.id,
        name: data.name,
        email: data.email,
        birthday: data.birthday,
        address: data.address,
        is_active: data.is_active,
      },
    },
    secret
  );
};

const decodeJWTToken = (data) => {
  const decoded = jwt.verify(data, secret);
  return decoded;
};

const getToken = (data) => {
  if (typeof data.authorization !== "undefined") {
    const token = data.authorization.split(" ");
    return token[1];
  }
  return {};
};

const generateRandromStr = (count) => {
  return randomBytes(count / 2).toString("hex");
};

const sendEmail = async (req, subject, to, payload, attachments) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  return await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to,
    subject,
    html: htmlTemplate(payload),
    attachments: attachments ?? [
      {
        filename: "image.png",
        path: `${baseUrl(req)}/images/3143370.png`,
        cid: "image_body",
      },
    ],
  });
};

module.exports = {
  sendEmail,
  baseUrl,
  getToken,
  decodeJWTToken,
  basePath,
  getURL,
  responseJSON,
  hashPassword,
  toISODate,
  hashJWTToken,
  generateOTP,
  generateRandromStr,
};
