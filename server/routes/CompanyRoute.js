const { Router } = require("express");
const companyController = require("../controller/CompanyController");
const roleAuth = require("../middleware/RoleAuth");

const router = Router();

router.post("/createcompanies", roleAuth(["Admin"]), companyController.createCompany);
router.get("/allcompanies", roleAuth(["Admin", "Employee"]), companyController.getAllCompanies);
router.get("/:id", roleAuth(["Admin", "Employee"]), companyController.getCompanyById);
router.put("/:id", roleAuth(["Admin"]), companyController.updateCompany);
router.delete("/:id", roleAuth(["Admin"]), companyController.deleteCompany);

module.exports = router;
