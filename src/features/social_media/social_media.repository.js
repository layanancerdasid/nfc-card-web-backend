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

  return await prisma.socialMedia.update({
    where: {
      id,
    },
    data: newData,
  });
};

const deleteSocmedRepo = async (id) => {
  return await prisma.socialMedia.delete({
    where: {
      id,
    },
  });
};

module.exports = {
  deleteSocmedRepo,
  updateSocMedRepo,
  createSocMedRepo,
};
