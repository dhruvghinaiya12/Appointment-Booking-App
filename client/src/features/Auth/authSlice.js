import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { Signup } from "./Api";

const initialState = {
  user: null,
  token: Cookies.get("token") || null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token, { expires: 7 }); 
      })
      .addCase(Signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
