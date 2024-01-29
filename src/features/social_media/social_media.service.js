const {
  createSocMedRepo,
  updateSocMedRepo,
} = require("./social_media.repository");

const createSocMedService = async (data) => {
  const res = await createSocMedRepo(data);

  return res;
};
const updateSocMedService = async (data, id) => {
  const res = await updateSocMedRepo(data, id);

  return res;
};

module.exports = {
  updateSocMedService,
  createSocMedService,
};
