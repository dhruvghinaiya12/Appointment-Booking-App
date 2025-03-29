const serviceRepository = require("../repository/ServiceRepo");

const serviceService = {
    createService: async (serviceData) => {
        try {
            return await serviceRepository.createService(serviceData);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllServices: async () => {
        try {
            return await serviceRepository.getAllServices();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getServiceById: async (id) => {
        try {
            const service = await serviceRepository.getServiceById(id);
            if (!service) throw new Error("Service not found");
            return service;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    updateService: async (id, updateData) => {
        try {
            const updatedService = await serviceRepository.updateService(id, updateData);
            if (!updatedService) throw new Error("Service not found");
            return updatedService;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteService: async (id) => {
        try {
            const deletedService = await serviceRepository.deleteService(id);
            if (!deletedService) throw new Error("Service not found");
            return { message: "Service deleted successfully" };
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

module.exports = serviceService;
