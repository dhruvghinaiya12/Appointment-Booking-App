const {Router} = require("express");
const UserRoutes = require("./UserRoute");

const router = Router();

router.use("/users", UserRoutes );

module.exports = router;
