import * as Yup from "yup";

let NameRegex = /^[a-zA-Z][a-zA-Z\s]{1,}$/;
let PasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const ValidateSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      NameRegex,
      "Name should be at least 2 characters long and contain only letters and spaces"
    )
    .required("A name is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .matches(
      PasswordRegex,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),

  role: Yup.string()
    .oneOf(["Admin", "Employee", "Client"], "Invalid role selected")
    .required("Role is required"),
});
