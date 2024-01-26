const prisma = require("../../src/core/config/db/index");
const { generateRandromStr } = require("../../src/helper/app");


const cardSeeder = async () => {

    await prisma.card.create({
        data: {
            card_number: generateRandromStr(8).toString(),
            serial_number: generateRandromStr(8).toString(),
            passcode: generateRandromStr(8).toString(),
        },
    });
}

module.exports = cardSeeder

