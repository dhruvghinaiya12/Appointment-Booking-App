const { Router } = require("express");
const serviceController = require("../controller/ServiceController");

const router = Router();

router.post("/create-service", serviceController.createService);
router.get("/Allservice", serviceController.getAllServices);
router.get("/:id", serviceController.getServiceById);
router.patch("/:id", serviceController.updateService);
router.delete("/:id", serviceController.deleteService);

module.exports = router;
