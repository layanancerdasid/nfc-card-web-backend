const prisma = require("../../core/config/db/index")
const { generateOTP } = require("../../helper/app");


const getUsers = async () => {
    return await prisma.users.findMany();
}

const registerRepo = async (data) => {

    const card = await prisma.card.findFirst({
        where : {
            card_number:data.card_number,
        }
    });

    if(card===null) return null;

    const registerData = await prisma.user.create({
        data: {
            name: data.name,
            birthday: data.birthday,
            email: data.email,
            password: data.password,
            address: data.address,
            is_active: false,
        }
    });

    await prisma.cardUser.create({
        data : {
            user_id:registerData.id,
            card_number:data.card_number
        }
    });

    return registerData;
}

const verifyEmailRepo = async (data) => {

    const userByEmail = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    });

    const verifyData = await prisma.user.update({
        where: {
            id: userByEmail.id,
            otp: userByEmail.otp,
        },
        data: {
            email_verified: userByEmail.email,
            otp: null,
            is_active: true,
        }
    })

    return verifyData;
}

const checkEmailRepo = async (data) => {
    const emailData = await prisma.user.findFirst({
        where: {
            email: data.email,
        }
    });

    return emailData;
}

const checkOtpRepo = async (data) => {
    const emailData = await prisma.user.findFirst({
        where: {
            email: data.email,
            otp: data.otp,
        }
    });

    return emailData;
}

const requestOtpRepo = async (data) => {
    const userByEmail = await prisma.user.findFirst({
        where: {
            email: data.email
        }
    });
    const otpHash = generateOTP()
    console.log(otpHash)
    const otp = await prisma.user.update({
        where: {
            id: userByEmail.id,
        },
        data: {
            otp: otpHash,
        }
    })

    return otp;
}

module.exports = {
    requestOtpRepo,
    getUsers,
    registerRepo,
    verifyEmailRepo,
    checkEmailRepo,
    checkOtpRepo,
}