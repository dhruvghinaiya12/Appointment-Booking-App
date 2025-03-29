const appointmentService = require("../services/AppointmentServices");

const appointmentController = {
    createAppointment: async (req, res) => {
        try {
            const appointment = await appointmentService.createAppointment(req.body);
            res.status(201).json({ message: "Appointment created successfully", appointment });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAllAppointments: async (req, res) => {
        try {
            const appointments = await appointmentService.getAllAppointments();
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAppointmentById: async (req, res) => {
        try {
            const { id } = req.params;
            const appointment = await appointmentService.getAppointmentById(id);
            if (!appointment) {
                return res.status(404).json({ message: "Appointment not found" });
            }
            res.status(200).json(appointment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateAppointment: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedAppointment = await appointmentService.updateAppointment(id, req.body);
            if (!updatedAppointment) {
                return res.status(404).json({ message: "Appointment not found" });
            }
            res.status(200).json({ message: "Appointment updated successfully", updatedAppointment });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    deleteAppointment: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedAppointment = await appointmentService.deleteAppointment(id);
            if (!deletedAppointment) {
                return res.status(404).json({ message: "Appointment not found" });
            }
            res.status(200).json({ message: "Appointment deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = appointmentController;
