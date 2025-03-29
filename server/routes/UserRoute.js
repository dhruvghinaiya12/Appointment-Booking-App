const { Router } = require("express");
const userController = require("../controller/UserController");
const passport = require("passport");
const roleAuth = require("../middleware/RoleAuth");

const UserRoutes = Router();

// User Authentication Routes
UserRoutes.post("/signup", userController.signup);
UserRoutes.post("/login", userController.login);

// Google Authentication Routes
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
      if (err) {
        return res.status(500).json({ error: "Error logging out" });
      }
      res.redirect("/");
    });
  } catch (error) {
    res.status(500).json({ error: "Error logging out" });
  }
});

// User Management Routes
UserRoutes.patch("/:id", userController.updateUser);
UserRoutes.delete("/:id", userController.deleteUser);
UserRoutes.get("/Alluser",roleAuth(["Admin"]), userController.getAllUsers);
UserRoutes.get("/info/:id", userController.getUserById);
UserRoutes.get("/", userController.getUsersByQuery);

module.exports = UserRoutes;
