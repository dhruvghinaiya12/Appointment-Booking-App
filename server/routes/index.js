const { Router } = require("express");
const UserRoutes = require("./UserRoute");
const ServiceRoutes = require("./ServiceRoute");
const appointmentRoutes=require("./AppointmentRoute")
const router = Router();

router.use("/users", UserRoutes);
router.use("/services", ServiceRoutes);
router.use("/appointments", appointmentRoutes);

module.exports = router;
