const prisma = require("../../src/core/config/db/index");
const { generateInt } = require("../../src/helper/app");


const cardSeeder = async () => {
    await prisma.card.create({
        data: {
            card_number: generateInt(16).toString(),
            serial_number: generateInt(9).toString(),
            passcode: generateInt(9).toString(),
        },
    });
}

module.exports = cardSeeder

