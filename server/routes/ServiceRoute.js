const { Router } = require("express");
const serviceController = require("../controller/ServiceController");
const roleAuth = require("../middleware/RoleAuth");

const router = Router();

router.post("/create-service", roleAuth(["Admin", "Employee"]), serviceController.createService);
router.get("/allservices", roleAuth(["Admin", "Employee", "Client"]), serviceController.getAllServices);
router.get("/:id", roleAuth(["Admin", "Employee", "Client"]), serviceController.getServiceById);
router.patch("/:id", roleAuth(["Admin", "Employee"]), serviceController.updateService);
router.delete("/:id", roleAuth(["Admin"]), serviceController.deleteService);

module.exports = router;
