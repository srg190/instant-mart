import Box from "Components/Box";
import React from "react";
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
import { getDataFromLocalStorage, setDataInLocalStorage } from "utilities";

const initialValues1 = {
  email: "Sudhi",
  password: "",
};
const Signup: React.FC<any> = () => {
  const {
    values,
    errors,
    touched,
    initialValues,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues1,
    validationSchema: loginValidation,
    onSubmit: (value, action) => {
      console.log(value);
      const data = getDataFromLocalStorage(value.email);
      console.log(data, "dksfgkdjg");
      if (data.email !== value.email) {
        alert("email or password incorrect!!!");
      }
      if (data.password === value.password) {
        alert("Successfully Loggedin!!!");
        console.log(data);
      } else {
        alert("email or password incorrect!!!");
      }
      action.resetForm();
    },
  });
  console.log(initialValues);
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
          {(() => {
            console.log(touched);
            return 0;
          })()}
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
