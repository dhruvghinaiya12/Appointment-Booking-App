import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiLink from "../../services/apiClient";

export const Signup = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await ApiLink.post("/users/signup", userData);
      return res.data;
    } catch (error) {
      console.error("Signup Error:", error.response?.data.error);
      return rejectWithValue(error.response?.data?.error || "Signup failed");
    }
  }
);

export const UserLogin = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await ApiLink.post("/users/login", userData);
      return res.data;
    } catch (error) {
      console.error("Login Error:", error.response?.data.error);
      return rejectWithValue(error.response?.data.error || "Login failed");
    }
  }
);
