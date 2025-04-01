import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserLogin } from "../features/Auth/Api";
import { CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth); 
  const [Userdata, setUserdata] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserdata({ ...Userdata, [name]: value });
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
      transition: Slide,
    });
  };

  const handleError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
      transition: Slide,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(UserLogin(Userdata));

    if (UserLogin.fulfilled.match(resultAction)) {
      handleSuccess("Login successful!");
      navigate("/");
    } else if (UserLogin.rejected.match(resultAction)) {
      handleError(resultAction.payload);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2 text-xl font-semibold text-primary">
            <img
              src="https://api.iconify.design/mdi:calendar-check.svg"
              alt="EasyAppoint Logo"
              className="w-7 h-7"
            />
            <span className="font-2xl text-[#2d3250] font-semibold">
              EasyAppoint
            </span>
          </div>
        </header>

        <main>
          <h1 className="text-3xl text-[#2d3250] font-bold mb-2">Welcome Back</h1>
          <p className="text-base text-[#666] mb-6">Sign in to continue to your account</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <img
                src="https://api.iconify.design/mdi:email-outline.svg"
                alt="Email"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleInput}
                className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-md bg-white text-sm text-[#666] font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition duration-200"
              />
            </div>

            <div className="mb-4 relative">
              <img
                src="https://api.iconify.design/mdi:lock-outline.svg"
                alt="Password"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50"
              />
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                onChange={handleInput}
                className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-md bg-white text-sm text-[#666] font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition duration-200"
              />
            </div>

            <div className="flex justify-between items-center mb-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" id="remember" className="w-4 h-4" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-primary text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-[0.9rem] bg-[#2d3250] text-white border-none rounded-lg text-base font-medium cursor-pointer transition duration-300"
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" /> 
              ) : (
                "Sign In"
              )}
            </button>

            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm text-gray-500">or continue with</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full py-2 border border-gray-300 rounded-md flex justify-center items-center gap-2 text-sm hover:bg-gray-100 transition duration-200"
            >
              <img
                src="https://api.iconify.design/flat-color-icons:google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;
