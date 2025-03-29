const appointmentRepository = require("../repository/AppointmentRepo");

const appointmentService = {
    createAppointment: async (appointmentData) => {
        try {
            return await appointmentRepository.createAppointment(appointmentData);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllAppointments: async () => {
        try {
            return await appointmentRepository.getAllAppointments();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAppointmentById: async (id) => {
        try {
            return await appointmentRepository.getAppointmentById(id);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    updateAppointment: async (id, updateData) => {
        try {
            return await appointmentRepository.updateAppointment(id, updateData);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteAppointment: async (id) => {
        try {
            return await appointmentRepository.deleteAppointment(id);
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = appointmentService;
