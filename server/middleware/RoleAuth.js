const roleAuth = (roles = []) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      res
        .status(403)
        .json({
          message: "Forbidden. You are not authorized to access this resource.",
        });
    }
  };
};

module.exports = roleAuth;
