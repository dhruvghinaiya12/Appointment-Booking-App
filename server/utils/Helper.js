const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Token = async (data) => {
  try {
    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "7d" });
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.HashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.ComparePassword = async (hash, password) => {
  try {
    return await bcrypt.compare(hash,password);
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.DecodeToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null; 
  }
};
