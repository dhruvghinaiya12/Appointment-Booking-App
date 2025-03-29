const serviceService = require("../services/Service.Services");

const serviceController = {
    createService: async (req, res) => {
        try {
            const service = await serviceService.createService(req.body);
            res.status(201).json(service);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getAllServices: async (req, res) => {
        try {
            const services = await serviceService.getAllServices();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getServiceById: async (req, res) => {
        try {
            const { id } = req.params;
            const service = await serviceService.getServiceById(id);
            res.status(200).json(service);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    updateService: async (req, res) => {
        try {
            const { id } = req.params;
            const updatedService = await serviceService.updateService(id, req.body);
            res.status(200).json(updatedService);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteService: async (req, res) => {
        try {
            const { id } = req.params;
            await serviceService.deleteService(id);
            res.status(200).json({ message: "Service deleted successfully" });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = serviceController;
