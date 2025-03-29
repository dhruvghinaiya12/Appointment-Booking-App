const UserCompany = require("../model/UserCompanySchema");

const userCompanyRepository = {
    assignUserToCompany: async (userCompanyData) => {
        try {
            return await UserCompany.create(userCompanyData);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllUserCompanies: async () => {
        try {
            return await UserCompany.find().populate("userID companyID");
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getUserCompanyById: async (id) => {
        try {
            return await UserCompany.findById(id).populate("userID companyID");
        } catch (error) {
            throw new Error("User-Company association not found");
        }
    },

    getCompaniesByUserId: async (userId) => {
        try {
            return await UserCompany.find({ userID: userId }).populate("companyID");
        } catch (error) {
            throw new Error("No companies found for this user");
        }
    },

    getUsersByCompanyId: async (companyId) => {
        try {
            return await UserCompany.find({ companyID: companyId }).populate("userID");
        } catch (error) {
            throw new Error("No users found for this company");
        }
    },

    removeUserFromCompany: async (id) => {
        try {
            return await UserCompany.findByIdAndDelete(id);
        } catch (error) {
            throw new Error("Failed to remove user from company");
        }
    }
};

module.exports = userCompanyRepository;
