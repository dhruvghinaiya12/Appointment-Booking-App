const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
    {
        clientID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        employeeID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        serviceID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
            required: true
        },
        appointmentDate: {
            type: Date,
            required: true
        },
        appointmentStatus: {
            type: String,
            enum: ["Scheduled", "Completed", "Cancelled"],
            default: "Scheduled"
        }
    },
    { timestamps: true }
);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
