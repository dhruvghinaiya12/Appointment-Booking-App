const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String }, 
    role: {
      type: String,
      enum: ["Admin", "Employee", "Client"],
      required: true,
    },
    googleId: { type: String, unique: true }, 
    profileImage: { type: String }, 
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
