const userRepository = require("../repository/UserRepo");
const { HashPassword, Token, ComparePassword } = require("../utils/Helper");

const userService = {
  signup: async (userData) => {
    try {
      const existingUser = await userRepository.findUserByEmail(userData.email);
      if (existingUser) {
        throw new Error("User already exists with this email");
      }

      userData.password = await HashPassword(userData.password);
      const newUser = await userRepository.createUser(userData);
      const token = await Token({
        userID: newUser.id,
        role: newUser.role,
      });

      return { user: newUser, token };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  login: async (email, password) => {
    try {
      const user = await userRepository.findUserByEmail(email);
      if (!user) {
        throw new Error("Invalid email ");
      }

      const isMatch = await ComparePassword(password, user.password);
      if (!isMatch) {
        throw new Error("Invalid password");
      }

      const token = await Token({ userID: user.id, role: user.role });
      console.log(token);
      

      return { user, token };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateUser: async (id, data) => {
    try {
      let user = await userRepository.findUserById(id);
      if (!user) {
        throw new Error("User not found");
      }
      return await userRepository.updateUser(id, data);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteUser: async (id) => {
    try {
      let user = await userRepository.findUserById(id);
      if (!user) {
        throw new Error("User not found");
      }
      return await userRepository.deleteUser(id);
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getAllUsers: async () => {
    try {
      return await userRepository.findAllUsers();
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getUserById: async (id) => {
    try {
      const user = await userRepository.findUserById(id);
      if (!user) {
        throw new Error("User not found");
      }

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getUsersByQuery: async (query) => {
    try {
      return await userRepository.findUsersByQuery(query);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = userService;
