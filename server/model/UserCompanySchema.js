const mongoose = require("mongoose");

const UserCompanySchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    companyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    }
}, { timestamps: true });

const UserCompany = mongoose.model("UserCompany", UserCompanySchema);

module.exports = UserCompany;
