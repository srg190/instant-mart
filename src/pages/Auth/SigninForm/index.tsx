import Box from "Components/Box";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { loginValidation } from "./index.validation";
import {
  Input,
  Button,
  Heading,
  FormContainer,
  Container,
} from "../index.style";
import { H1 } from "Components/Typography";
import { useAppDispatch, useAppSelector } from "store";
import { userLogin } from "Slices/User";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup: React.FC<any> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, isAutenticated, error, message } = useAppSelector(
    (state) => state.user
  );
  const { _id } = useAppSelector((state) => state.cart);

  const notify = (str: string) => toast(str);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      cartId: _id,
    },
    validationSchema: loginValidation,
    onSubmit: (value, action) => {
      dispatch(userLogin(value));
      if (error) {
        notify(error);
      }
      setSubmitting(false);
    },
  });

  useEffect(() => {}, [isAutenticated, loading, error, message]);

  if (isAutenticated) {
    if (message) notify(message);
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
            onBlur={handleBlur}
            placeholder="email"
            name="email"
          />
          {errors.email && touched.email ? <p>*{errors.email}</p> : null}
          <Input
            value={values.password}
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
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
