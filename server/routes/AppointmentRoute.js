const { Router } = require("express");
const appointmentController = require("../controller/AppointmentController");
const roleAuth = require("../middleware/RoleAuth");

const router = Router();

router.post("/create-appointment", roleAuth(["Client", "Employee"]), appointmentController.createAppointment);
router.get("/allappointments", roleAuth(["Admin", "Employee"]), appointmentController.getAllAppointments);
router.get("/:id", roleAuth(["Admin", "Employee"]), appointmentController.getAppointmentById);
router.patch("/:id", roleAuth(["Admin", "Employee"]), appointmentController.updateAppointment);
router.delete("/:id", roleAuth(["Admin"]), appointmentController.deleteAppointment);

module.exports = router;
