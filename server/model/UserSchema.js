const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    role: {
      type: String,
      enum: ["Admin", "Employee", "Client"],
      default: "Client",
      required: true,
    },

    googleId: { type: String },
    profileImage: { type: String },
  },
  { timestamps: true }
);


const User = mongoose.model("User", UserSchema);
module.exports = User;
