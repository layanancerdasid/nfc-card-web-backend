const {
    registerRepo,
    verifyEmailRepo,
    checkEmailRepo,
    checkOtpRepo,
    requestOtpRepo,
    verifyCardRepo
} = require("../user/user.repository");

const registerService = async (data) => {
    const registerRes = await registerRepo(data);

    return registerRes;
}

const verifyEmailService = async (data) => {

    const verifyEmailRes = await verifyEmailRepo(data);

    return verifyEmailRes;
}

const checkEmailService = async (data) => {

    const checkEmailRes = await checkEmailRepo(data);

    return checkEmailRes;
}
const checkOtpService = async (data) => {

    const checkEmailRes = await checkOtpRepo(data);

    return checkEmailRes;
}

const verifyCardService = async (data) => {

    const verifyCardRes = await verifyCardRepo(data);

    return verifyCardRes;
}

const requestOtpService = async (data) => {

    const checkEmailRes = await requestOtpRepo(data);

    return checkEmailRes;
}
module.exports = {
    verifyCardService,
    requestOtpService,
    checkOtpService,
    registerService,
    verifyEmailService,
    checkEmailService,
}