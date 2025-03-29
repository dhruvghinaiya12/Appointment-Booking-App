const { Router } = require("express");
const userCompanyController = require("../controller/UserCompanyController");
const roleAuth = require("../middleware/RoleAuth");

const router = Router();

router.post("/assign", roleAuth(["Admin"]), userCompanyController.assignUserToCompany);
router.get("/user/:userID", roleAuth(["Admin", "Employee"]), userCompanyController.getCompaniesByUser);
router.get("/company/:companyID", roleAuth(["Admin", "Employee"]), userCompanyController.getUsersByCompany);
router.delete("/remove/:userID/:companyID", roleAuth(["Admin"]), userCompanyController.removeUserFromCompany);

module.exports = router;
