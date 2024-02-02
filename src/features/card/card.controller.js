const prisma = require("../../core/config/db");
const { responseJSON, generateRandromStr } = require("../../helper/app");
const {
  errorBind,
  maxInput,
  successMessage,
} = require("../../helper/message_response");

const generateCard = async (req, res) => {
  try {
    const { total } = req.body;

    if (total > 1000) return responseJSON(res, 400, maxInput(1000));

    const data = Array.from({ length: total }).map(() => ({
      card_number: generateRandromStr(8).toString(),
      serial_number: generateRandromStr(8).toString(),
      passcode: generateRandromStr(8).toString(),
    }));

    await prisma.card.createMany({ data });
    return responseJSON(res, 200, successMessage.saveSuccess);
  } catch (error) {
    return responseJSON(res, 500, errorBind(error.message));
  }
};

module.exports = {
  generateCard,
};
