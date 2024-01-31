const {
  createSocMedRepo,
  updateSocMedRepo,
  deleteSocmedRepo,
} = require("./social_media.repository");

const createSocMedService = async (data) => {
  const res = await createSocMedRepo(data);

  return res;
};
const updateSocMedService = async (data, id) => {
  const res = await updateSocMedRepo(data, id);

  return res;
};

const deleteSocmedService = async (data, id) => {
  const res = await deleteSocmedRepo(data, id);

  return res;
};

module.exports = {
  deleteSocmedService,
  updateSocMedService,
  createSocMedService,
};
