const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required: true,
        unique: true
    },
    serviceDescription: {
        type: String,
        required: true
    },
    serviceDuration: {
        type: Number,
        required: true
    },
    serviceCost: {
        type: Number,
        required: true
    },
},
{ timestamps: true }

);

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;