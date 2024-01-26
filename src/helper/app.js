var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('node:crypto');
const process = require('node:process');
const responseJSON = (res, code, msg, data = {}) => {
    return res.status(code).send({
        code: code,
        msg: msg,
        data: data,
    });
}

const generateOTP = () => {
    return `${Math.floor(1000 + Math.random() * 9000 * 90)}`
}

const hashPassword = (str) => {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(str, salt);
}

const toISODate = (date) => {
    return (new Date(date)).toISOString();
}

const hashJWTToken = (data) => {
    const secret = process.env.JWT_SECRET;

    const expiresIn = process.env.JWT_TTL;

    return jwt.sign({
        id: data.id,
        name: data.name,
        email: data.email,
        birthday: data.birthday,
        address: data.address,
        is_active: data.is_active,
    }, secret, { expiresIn });
}

const generateRandromStr = (count) => {
   
    
      return randomBytes(count/2).toString("hex");
}

module.exports = {
    responseJSON,
    hashPassword,
    toISODate,
    hashJWTToken,
    generateOTP,
    generateRandromStr,
}
