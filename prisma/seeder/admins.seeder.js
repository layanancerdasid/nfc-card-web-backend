const prisma = require("../../src/core/config/db/index");

const { hashPassword } = require("../../src/helper/app");

const adminSeeder = async () => {
  await prisma.admin.create({
    data: {
      name: "Admin 1",
      email: "admin1@lci.com",
      password: hashPassword("123"),
    },
  });
};

module.exports = adminSeeder;
