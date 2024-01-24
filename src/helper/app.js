var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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

const generateInt = (count) => {
    const length = count;
    let result = '';

    // Loop untuk menghasilkan digit acak sebanyak panjang yang diinginkan
    for (let i = 0; i < length; i++) {
        const randomDigit = Math.floor(Math.random() * 10); // Digit acak antara 0-9
        result += randomDigit.toString();
    }

    return result;
}

module.exports = {
    responseJSON,
    hashPassword,
    toISODate,
    hashJWTToken,
    generateOTP,
    generateInt,
}
