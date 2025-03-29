const { Router } = require("express");
const UserRoutes = require("./UserRoute");
const ServiceRoutes = require("./ServiceRoute");
const appointmentRoutes=require("./AppointmentRoute")
const companyRoutes = require("./CompanyRoute");
const userCompanyRoutes = require("./UserCompanyRoute");
const router = Router();

router.use("/users", UserRoutes);
router.use("/services", ServiceRoutes);
router.use("/appointments", appointmentRoutes);
router.use("/companies", companyRoutes);
router.use("/user-company", userCompanyRoutes);

module.exports = router;
