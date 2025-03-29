const { Router } = require("express");
const appointmentController = require("../controller/AppointmentController");

const router = Router();

router.post("/", appointmentController.createAppointment);
router.get("/", appointmentController.getAllAppointments);
router.get("/:id", appointmentController.getAppointmentById);
router.patch("/:id", appointmentController.updateAppointment);
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;
