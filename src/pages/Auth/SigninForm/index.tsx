import Box from "Components/Box";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { loginValidation } from "./index.validation";
import {
  Input,
  Button,
  Heading,
  FormContainer,
  Container,
} from "../index.style";
import { H1 } from "Components/Typography";
import { getDataFromLocalStorage } from "utilities";
import { useAppDispatch, useAppSelector } from "store";
import { userLogin } from "Slices/User";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialValues1 = {
  email: "Sudhi",
  password: "",
};
const Signup: React.FC<any> = () => {
  const { loading, isAutenticated, error, user, token } = useAppSelector(
    (state) => state.user
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues1,
    validationSchema: loginValidation,
    onSubmit: (value, action) => {
      const data = getDataFromLocalStorage(value.email);
      // console.log(data, "dksfgkdjg");
      if (data.email !== value.email) {
        toast("email or password incorrect!!!");
      }
      if (data.password === value.password) {
        toast("Successfully Loggedin!!!");
        // console.log(data);
      } else {
        toast("email or password incorrect!!!");
      }
      dispatch(userLogin(value));
      // action.resetForm();
    },
  });
  useEffect(() => {}, [isAutenticated, loading]);
  if (isAutenticated) {
    navigate("/");
  }
  return (
    <Container>
      <FormContainer>
        <Heading>
          <H1 data-testid="heading-2">Sign In</H1>
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            value={values.email}
            type="email"
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
          {/* {(() => {
            // console.log(touched);
            return 0;
          })()} */}
          {errors.email && touched.email ? <p>*{errors.email}</p> : null}
          <Input
            value={values.password}
            type="password"
            onChange={handleChange}
            placeholder="password"
            name="password"
          />
          {errors.password && touched.password ? (
            <p>*{errors.password}</p>
          ) : null}
          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Signup;
