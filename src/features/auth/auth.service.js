const { checkAccountRepo } = require("./auth.repository")

const checkAccountService = async (data) => {
    return await checkAccountRepo(data);
}

module.exports = { checkAccountService }