const prisma = require("../../core/config/db/index");
const checkAccountRepo = async (data) => {
  return await prisma.user.findFirst({
    where: {
      email: data.email,
    },
  });
};

module.exports = { checkAccountRepo };
