const { Router } = require("express");
const userController = require("../controller/UserController");
const passport = require("passport");
const roleAuth = require("../middleware/RoleAuth");

const UserRoutes = Router();


UserRoutes.post("/signup", userController.signup);
UserRoutes.post("/login", userController.login);
UserRoutes.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
UserRoutes.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login-failure" }),
  (req, res) => {
    res.json({ message: "Google login successful", user: req.user });
  }
);

UserRoutes.get("/login-failure", (req, res) => {
  res.status(401).json({ error: "Login Failed" });
});
UserRoutes.get("/logout", async (req, res) => {
  try {
    req.logout();
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ error: "Error logging out" });
      res.redirect("/");
    });
  } catch (error) {
    res.status(500).json({ error: "Error logging out" });
  }
});

UserRoutes.patch("/:id", roleAuth(["Admin", "Employee"]), userController.updateUser);
UserRoutes.delete("/:id", roleAuth(["Admin"]), userController.deleteUser);
UserRoutes.get("/Alluser", roleAuth(["Admin"]), userController.getAllUsers);
UserRoutes.get("/info/:id", roleAuth(["Admin", "Employee"]), userController.getUserById);
UserRoutes.get("/", roleAuth(["Admin"]), userController.getUsersByQuery);

module.exports = UserRoutes;
