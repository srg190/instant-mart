import * as Yup from "yup";

export const registrationValidation = Yup.object({
  email: Yup.string().email().required("Please provide email"),
  password: Yup.string().min(6).required("Please provide password"),
  confirmPassoword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password must match"),
  address: Yup.object().shape({
    street: Yup.string().min(3).required("Please enter street"),
    location: Yup.string().required("Please provide location"),
    houseNumber: Yup.string().required("Please provide house number"),
    city: Yup.string().required("Please provide city"),
  }),
});
