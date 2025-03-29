const userCompanyService = require("../services/UserCompanyService");

const userCompanyController = {
    assignUserToCompany: async (req, res) => {
        try {
            const { userID, companyID } = req.body;
            const assignment = await userCompanyService.assignUserToCompany(userID, companyID);
            res.status(201).json({ message: "User assigned to company successfully", data: assignment });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getCompaniesByUser: async (req, res) => {
        try {
            const { userID } = req.params;
            const companies = await userCompanyService.getCompaniesByUser(userID);
            res.status(200).json({ message: "Companies retrieved successfully", data: companies });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getUsersByCompany: async (req, res) => {
        try {
            const { companyID } = req.params;
            const users = await userCompanyService.getUsersByCompany(companyID);
            res.status(200).json({ message: "Users retrieved successfully", data: users });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    removeUserFromCompany: async (req, res) => {
        try {
            const { userID, companyID } = req.params;
            await userCompanyService.removeUserFromCompany(userID, companyID);
            res.status(200).json({ message: "User removed from company successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = userCompanyController;
