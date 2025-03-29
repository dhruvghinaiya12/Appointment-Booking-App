const { default: mongoose } = require("mongoose");
const User = require("../model/UserSchema");

const userRepository = {
  createUser: async (userData) => {
    try {
      return await User.create(userData);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
  findUserByEmail: async (email) => {
    try {
      return await User.findOne({ email });
    } catch (error) {
      console.error("Error finding user by email:", error);
      throw error;
    }
  },

  findUserById: async (id) => {
    try {
      const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
  
      if (isValidObjectId) {
        return await User.findOne({ _id: id });
      } else {
        return await User.findOne({ googleId: id }); 
      }
    } catch (error) {
      console.error("Error finding user by ID:", error);
      throw error;
    }
  },
  
  
  updateUser: async (id, updatedUserData) => {
    try {
      return await User.findByIdAndUpdate(id, updatedUserData, { new: true });
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  },
  deleteUser: async (id) => {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  },
  findAllUsers: async () => {
    try {
      return await User.find();
    } catch (error) {
      console.error("Error finding all users:", error);
      throw error;
    }
  },
  findUsersByQuery: async (Query) => {
    try {
      return await User.find(Query);
    } catch (error) {
      console.error("Error finding users by query:", error);
      throw error;
    }
  }

};

module.exports = userRepository;
