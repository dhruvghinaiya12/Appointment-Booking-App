const jwt = require("jsonwebtoken");
require("dotenv").config();

const Token = async (req, res, next) => {
    const publicRoutes = ["/users/signup", "/users/login"];
    // console.log(publicRoutes);
    

    if (publicRoutes.some(route => req.url.startsWith(route))) {
        return next(); 
    }

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Token is required" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "You are not authorized" });
        // console.log(error);
    }
};

module.exports = Token;
