const companyRepository = require("../repository/CompanyRepo");

const companyService = {
  createCompany: async (companyData) => {
    try {
      return await companyRepository.createCompany(companyData);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAllCompanies: async () => {
    try {
      return await companyRepository.getAllCompanies();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getCompanyById: async (id) => {
    try {
      return await companyRepository.getCompanyById(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateCompany: async (id, updateData) => {
    try {
      return await companyRepository.updateCompany(id, updateData);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteCompany: async (id) => {
    try {
      return await companyRepository.deleteCompany(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = companyService;
