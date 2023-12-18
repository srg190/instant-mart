import * as Yup from "yup";
export const loginValidation = Yup.object({
  email: Yup.string().email().required("Please provide email"),
  password: Yup.string().min(6).required("Please provide password"),
});
