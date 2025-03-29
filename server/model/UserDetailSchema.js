const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    country: { type: String },
    postalCode: { type: String },
  },
  { timestamps: true }
);

const UserDetails = mongoose.model("UserDetails", UserDetailsSchema);

module.exports = UserDetails;
