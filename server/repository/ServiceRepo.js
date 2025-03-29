const Service= require("../model/ServiceSchema");

const serviceRepository = {
    createService: async (serviceData) => {
        try {
            return await Service.create(serviceData);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllServices: async () => {
        try {
            return await Service.find();
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getServiceById: async (id) => {
        try {
            return await Service.findById(id);
        } catch (error) {
            throw new Error("Service not found");
        }
    },

    updateService: async (id, updateData) => {
        try {
            return await Service.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
            throw new Error("Failed to update service");
        }
    },

    deleteService: async (id) => {
        try {
            return await Service.findByIdAndDelete(id);
        } catch (error) {
            throw new Error("Failed to delete service");
        }
    }
};

module.exports = serviceRepository;
