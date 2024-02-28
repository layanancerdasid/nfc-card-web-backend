const { responseJSON } = require("./helper/app");
const {
  unauthorized,
  invalidTokenJWT,
  forbiddenAccess,
} = require("./helper/message_response");
const jwt = require("jsonwebtoken");
const process = require("node:process");

const memberMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return responseJSON(res, 401, unauthorized);
  }

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) return responseJSON(res, 401, invalidTokenJWT);

    const userRole = decoded.data.role;

    if (userRole === "member") {
      next();
    } else {
      return responseJSON(res, 403, forbiddenAccess);
    }
  });
};

const adminMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return responseJSON(res, 401, unauthorized);
  }

  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) return responseJSON(res, 401, invalidTokenJWT);

    const userRole = decoded.data.role;

    if (userRole === "admin") {
      next();
    } else {
      return responseJSON(res, 403, forbiddenAccess);
    }
  });
};

module.exports = {
  memberMiddleware,
  adminMiddleware,
};
