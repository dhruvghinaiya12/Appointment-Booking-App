const companyService = require("../services/CompanyServices");

const companyController = {
  createCompany: async (req, res) => {
    try {
      const company = await companyService.createCompany(req.body);
      res.status(201).json({ message: "Company created successfully", company });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getAllCompanies: async (req, res) => {
    try {
      const companies = await companyService.getAllCompanies();
      res.status(200).json(companies);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  getCompanyById: async (req, res) => {
    try {
        const {id}=req.params
      const company = await companyService.getCompanyById(id);
      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }
      res.status(200).json(company);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  updateCompany: async (req, res) => {
    try {
        const {id}=req.params
      const updatedCompany = await companyService.updateCompany(id, req.body);
      if (!updatedCompany) {
        return res.status(404).json({ message: "Company not found" });
      }
      res.status(200).json({ message: "Company updated successfully", updatedCompany });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteCompany: async (req, res) => {
    try {
        const {id}=req.params
      const deletedCompany = await companyService.deleteCompany(id);
      if (!deletedCompany) {
        return res.status(404).json({ message: "Company not found" });
      }
      res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = companyController;
