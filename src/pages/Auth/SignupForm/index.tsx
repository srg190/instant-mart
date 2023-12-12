import Box from "Components/Box";
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { registrationValidation } from "./index.validation";
import {
  Input,
  Button,
  Heading,
  FormContainer,
  Container,
} from "../index.style";
import { H1 } from "Components/Typography";
import { getDataFromLocalStorage, setDataInLocalStorage } from "utilities";

const initialValues = {
  email: "",
  password: "",
  confirmPassoword: "",
  address: {
    street: "",
    location: "",
    houseNumber: "",
    city: "",
  },
};
const Signup: React.FC<any> = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registrationValidation,
      onSubmit: (value, action) => {
        console.log(value);
        const data = getDataFromLocalStorage(value.email);
        console.log(data, "dksfgkdjg");
        if (data.email === value.email) {
          alert("User Already Registered!!!");
        } else {
          setDataInLocalStorage(value.email, value);
        }
        action.resetForm();
      },
    });
  return (
    <Container>
      <FormContainer>
        <Heading>
          <H1 data-testid="heading-1">Sign Up</H1>
        </Heading>
        <form onSubmit={handleSubmit}>
          <Input
            value={values.email}
            type="email"
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
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
          <Input
            value={values.confirmPassoword}
            type="password"
            onChange={handleChange}
            placeholder="confirm password"
            name="confirmPassoword"
          />
          {errors.confirmPassoword && touched.confirmPassoword ? (
            <p>*{errors.confirmPassoword}</p>
          ) : null}
          <Input
            value={values.address.street}
            type="text"
            onChange={handleChange}
            placeholder="street"
            name="address.street"
          />
          {errors.address?.street && touched.address?.street ? (
            <p>*{errors.address.street}</p>
          ) : null}
          <Input
            value={values.address.location}
            type="text"
            onChange={handleChange}
            placeholder="location"
            name="address.location"
          />
          {errors.address?.location && touched.address?.location ? (
            <p>*{errors.address.location}</p>
          ) : null}
          <Input
            value={values.address.houseNumber}
            type="text"
            onChange={handleChange}
            placeholder="houseNumber"
            name="address.houseNumber"
          />
          {errors.address?.houseNumber && touched.address?.houseNumber ? (
            <p>*{errors.address.houseNumber}</p>
          ) : null}
          <Input
            value={values.address.city}
            type="text"
            onChange={handleChange}
            placeholder="city"
            name="address.city"
          />
          {errors.address?.city && touched.address?.city ? (
            <p>*{errors.address.city}</p>
          ) : null}
          <Button type="submit">Submit</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Signup;
