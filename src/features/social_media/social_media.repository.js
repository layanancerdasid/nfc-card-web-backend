const prisma = require("../../core/config/db/index");

const createSocMedRepo = async (data) => {
  return await prisma.socialMedia.create({
    data: {
      name: data.name,
      link: data.link,
      image: data.image,
    },
  });
};

const updateSocMedRepo = async (data, id) => {
  let newData = {};
  if (data.image) {
    newData = {
      name: data.name,
      link: data.link,
      image: data.image,
    };
  } else {
    newData = {
      name: data.name,
      link: data.link,
    };
  }

  console.log(id);

  return await prisma.socialMedia.update({
    where: {
      id,
    },
    data: newData,
  });
};

module.exports = {
  updateSocMedRepo,
  createSocMedRepo,
};
