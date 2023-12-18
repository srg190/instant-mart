import React, { useState } from "react";
import { Formik } from "formik";
import { registrationValidation } from "./index.validation";
import { User, userRegistration, userState } from "Slices/User";
import { toast } from "react-toastify";
import {
  Input,
  Button,
  Heading,
  FormContainer,
  Container,
  ErrorPara,
} from "../index.style";
import { H1 } from "Components/Typography";
import { getDataFromLocalStorage, setDataInLocalStorage } from "utilities";
import { useAppDispatch, useAppSelector } from "store";

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
  const { error, loading, user }: userState = useAppSelector(
    (state) => state.user
  );
  const [heading, setHeading] = useState("");
  const dispatch = useAppDispatch();
  const notify = (str: string) => toast(str);
  return (
    <Container>
      <FormContainer>
        <Heading>
          <H1 data-testid="heading-1">{!heading ? "Sign Up" : heading}</H1>
        </Heading>
        <Formik
          validateOnChange={true}
          validateOnMount={true}
          isInitialValid={true}
          initialValues={initialValues}
          validationSchema={registrationValidation}
          onSubmit={(value, { setSubmitting, resetForm }) => {
            setTimeout(async () => {
              dispatch(userRegistration(value));
              const data = getDataFromLocalStorage(value.email);
              if (data.email === value.email) {
                notify("User Already Registered!!!");
              } else {
                setDataInLocalStorage(value.email, value);
                notify("Registration Successful!!!");
              }
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            handleSubmit,
            handleBlur,
            values,
            handleChange,
            touched,
            errors,
          }) => (
            <form onSubmit={handleSubmit}>
              <Input
                value={values.email}
                type="email"
                onChange={handleChange}
                placeholder="email"
                name="email"
              />
              {errors.email && touched.email ? (
                <ErrorPara>*{errors.email}</ErrorPara>
              ) : null}
              <Input
                value={values.password}
                type="password"
                onChange={handleChange}
                placeholder="password"
                name="password"
              />
              {errors.password && touched.password ? (
                <ErrorPara>*{errors.password}</ErrorPara>
              ) : null}
              <Input
                value={values.confirmPassoword}
                type="password"
                onChange={handleChange}
                placeholder="confirm password"
                name="confirmPassoword"
              />
              {errors.confirmPassoword && touched.confirmPassoword ? (
                <ErrorPara>*{errors.confirmPassoword}</ErrorPara>
              ) : null}
              <Input
                value={values.address.street}
                type="text"
                onChange={handleChange}
                placeholder="street"
                name="address.street"
              />
              {errors.address?.street && touched.address?.street ? (
                <ErrorPara>*{errors.address.street}</ErrorPara>
              ) : null}
              <Input
                value={values.address.location}
                type="text"
                onChange={handleChange}
                placeholder="location"
                name="address.location"
              />
              {errors.address?.location && touched.address?.location ? (
                <ErrorPara>*{errors.address.location}</ErrorPara>
              ) : null}
              <Input
                value={values.address.houseNumber}
                type="text"
                onChange={handleChange}
                placeholder="houseNumber"
                name="address.houseNumber"
              />
              {errors.address?.houseNumber && touched.address?.houseNumber ? (
                <ErrorPara>*{errors.address.houseNumber}</ErrorPara>
              ) : null}
              <Input
                value={values.address.city}
                type="text"
                onChange={handleChange}
                placeholder="city"
                name="address.city"
              />
              {errors.address?.city && touched.address?.city ? (
                <ErrorPara>*{errors.address.city}</ErrorPara>
              ) : null}
              <Button type="submit">{loading ? "Load..." : "submit"}</Button>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Signup;
