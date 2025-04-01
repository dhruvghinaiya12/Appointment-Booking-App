import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ValidateSchema } from "../utils/signupSchema";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signup } from "../features/Auth/Api";
import { CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      role: "",
    },
    validationSchema: ValidateSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(Signup(values)).unwrap();
        toast.success("Signup successful!", {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
          transition: Slide,
        });
        formik.resetForm();
        navigate("/login");
      } catch (err) {
        console.log("Error Object:", err);
        if (err?.error) {
          toast.error(err.error, {
            position: "top-center",
            autoClose: 1000,
            theme: "dark",
            transition: Slide,
          });
        } else {
          toast.error(err, {
            position: "top-center",
            autoClose: 1000,
            theme: "dark",
            transition: Slide,
          });
        }
      }
    },
  });

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
          <h1 className="text-3xl text-[#2d3250] font-bold mb-2">
            Create Account
          </h1>
          <p className="text-base text-[#666] mb-6">Sign up to get started</p>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4 relative">
              <img
                src="https://api.iconify.design/mdi:account-outline.svg"
                alt="Username"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50"
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-md bg-white text-sm text-[#666] font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition duration-200"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            {formik.errors.username && (
              <p className="text-red-500">{formik.errors.username}</p>
            )}

            <div className="mb-4 relative">
              <img
                src="https://api.iconify.design/mdi:email-outline.svg"
                alt="Email"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-md bg-white text-sm text-[#666] font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition duration-200"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            {formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}

            <div className="mb-4 relative">
              <img
                src="https://api.iconify.design/mdi:lock-outline.svg"
                alt="Password"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-md bg-white text-sm text-[#666] font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition duration-200"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
            {formik.errors.password && (
              <p className="text-red-500">{formik.errors.password}</p>
            )}

            <div className="mb-4 relative">
              <img
                src="https://api.iconify.design/mdi:account-key-outline.svg"
                alt="Role"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50"
              />
              <select
                name="role"
                className="w-full py-2 pl-12 pr-4 border border-gray-300 rounded-md bg-white text-sm text-[#666] font-semibold focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition duration-200"
                onChange={formik.handleChange}
                value={formik.values.role}
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="Client">Client</option>
                <option value="Employee">Employee</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            {formik.errors.role && (
              <p className="text-red-500">{formik.errors.role}</p>
            )}

            <button
              type="submit"
              className="w-full px-4 py-[0.9rem] bg-[#2d3250] text-white border-none rounded-lg text-base font-medium cursor-pointer transition duration-300"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign Up"
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
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
