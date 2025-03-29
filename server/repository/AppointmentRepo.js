const Appointment = require("../model/AppointmentSchema");

const appointmentRepository = {
    createAppointment: async (appointmentData) => {
        try {
            return await Appointment.create(appointmentData);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllAppointments: async () => {
        try {
            return await Appointment.find().populate("clientID employeeID serviceID");
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAppointmentById: async (id) => {
        try {
            const appointment = await Appointment.findById(id).populate("clientID employeeID serviceID");
            if (!appointment) {
                throw new Error("Appointment not found");
            }
            return appointment;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    updateAppointment: async (id, updateData) => {
        try {
            const updatedAppointment = await Appointment.findByIdAndUpdate(id, updateData, { new: true }).populate("clientID employeeID serviceID");
            if (!updatedAppointment) {
                throw new Error("Failed to update appointment");
            }
            return updatedAppointment;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteAppointment: async (id) => {
        try {
            const deletedAppointment = await Appointment.findByIdAndDelete(id);
            if (!deletedAppointment) {
                throw new Error("Failed to delete appointment");
            }
            return deletedAppointment;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = appointmentRepository;
