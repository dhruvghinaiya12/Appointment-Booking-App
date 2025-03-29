const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    companyAddress: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Company= mongoose.model("Company", CompanySchema);

module.exports = Company;
