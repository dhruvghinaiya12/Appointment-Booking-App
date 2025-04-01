import * as Yup from "yup";

let PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .matches(PasswordRegex, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
    .required("Password is required"),
});
