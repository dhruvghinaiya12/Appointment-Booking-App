import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ValidateSchema } from "../utils/signupSchema";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signup } from "../features/Auth/Api";

const SignUp = () => {
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
    <div className="flex flex-col items-center justify-center h-screen">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="w-80 bg-gray-100 p-6 rounded-lg"
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 mb-2 borde"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.errors.username && (
          <p className="text-red-500">{formik.errors.username}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && (
          <p className="text-red-500">{formik.errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-2 border"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && (
          <p className="text-red-500">{formik.errors.password}</p>
        )}

        <select
          name="role"
          className="w-full p-2 mb-2 border"
          onChange={formik.handleChange}
          value={formik.values.role}
        >
          <option value="" disabled>
            Select role
          </option>
          <option value="Client">Client</option>
          <option value="Employee">Employee</option>
          <option value="Admin">Admin</option>
        </select>
        {formik.errors.role && (
          <p className="text-red-500">{formik.errors.role}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 mt-4"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
