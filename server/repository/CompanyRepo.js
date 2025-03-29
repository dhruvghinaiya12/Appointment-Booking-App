const Company = require("../model/CompanySchema");

const companyRepository = {
  createCompany: async (companyData) => {
    try {
      return await Company.create(companyData);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAllCompanies: async () => {
    try {
      return await Company.find();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getCompanyById: async (id) => {
    try {
      const company = await Company.findById(id);
      if (!company) throw new Error("Company not found");
      return company;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateCompany: async (id, updateData) => {
    try {
      const updatedCompany = await Company.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedCompany) throw new Error("Company not found");
      return updatedCompany;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteCompany: async (id) => {
    try {
      const deletedCompany = await Company.findByIdAndDelete(id);
      if (!deletedCompany) throw new Error("Company not found");
      return deletedCompany;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = companyRepository;
