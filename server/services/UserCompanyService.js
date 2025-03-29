const userCompanyRepository = require("../repository/UserCompanyRepo");

const userCompanyService = {
    assignUserToCompany: async (userID, companyID) => {
        try {
            const assignment = await userCompanyRepository.createUserCompany({ userID, companyID });
            return assignment;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getCompaniesByUser: async (userID) => {
        try {
            return await userCompanyRepository.findCompaniesByUser(userID);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getUsersByCompany: async (companyID) => {
        try {
            return await userCompanyRepository.findUsersByCompany(companyID);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    removeUserFromCompany: async (userID, companyID) => {
        try {
            return await userCompanyRepository.deleteUserCompany(userID, companyID);
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = userCompanyService;
