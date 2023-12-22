import React, { useState, useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "store";
import { FormValue, paraTestId } from "Constants/testConstants";
import { useNavigate } from "react-router-dom";

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

const Signup: React.FC<any> = ({ onHandle }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { _id } = useAppSelector((state) => state.cart);
  const { error, loading, message, isAutenticated }: userState = useAppSelector(
    (state) => state.user
  );

  const notify = (str: string) => toast(str);

  useEffect(() => {}, [error, loading, message, isAutenticated]);
  if (isAutenticated) {
    if (message) notify(message);
    navigate("/");
  }

  return (
    <Container>
      <FormContainer>
        <Heading data-testid={FormValue.OUTSIDE}>
          <H1 data-testid={FormValue.HEADING1}>Sign Up</H1>
        </Heading>
        <Formik
          validateOnChange={true}
          validateOnMount={true}
          isInitialValid={true}
          initialValues={initialValues}
          validationSchema={registrationValidation}
          onSubmit={(value, { setSubmitting, resetForm }) => {
            dispatch(userRegistration({ ...value, cartId: _id }));
            if (error) {
              notify(error);
            }
            setSubmitting(false);
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
                data-testid={FormValue.EMAIL}
                value={values.email}
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="email"
                name="email"
              />
              {errors.email && touched.email ? (
                <ErrorPara data-testid={paraTestId.par1}>
                  *{errors.email}
                </ErrorPara>
              ) : null}
              <Input
                data-testid={FormValue.PASSWORD}
                value={values.password}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="password"
                name="password"
              />
              {errors.password && touched.password ? (
                <ErrorPara data-testid={paraTestId.par2}>
                  *{errors.password}
                </ErrorPara>
              ) : null}
              <Input
                disabled={errors.password ? true : false}
                data-testid={FormValue.CONFIRM_PASSWORD}
                value={values.confirmPassoword}
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="confirm password"
                name="confirmPassoword"
              />
              {errors.confirmPassoword && touched.confirmPassoword ? (
                <ErrorPara data-testid={paraTestId.par3}>
                  *{errors.confirmPassoword}
                </ErrorPara>
              ) : null}
              <Input
                data-testid={FormValue.STREET}
                value={values.address.street}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="street"
                name="address.street"
              />
              {errors.address?.street && touched.address?.street ? (
                <ErrorPara data-testid={paraTestId.par4}>
                  *{errors.address.street}
                </ErrorPara>
              ) : null}
              <Input
                data-testid={FormValue.LOCATION}
                value={values.address.location}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="location"
                name="address.location"
              />
              {errors.address?.location && touched.address?.location ? (
                <ErrorPara data-testid={paraTestId.par5}>
                  *{errors.address.location}
                </ErrorPara>
              ) : null}
              <Input
                data-testid={FormValue.HOUSE_NUMBER}
                value={values.address.houseNumber}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="houseNumber"
                name="address.houseNumber"
              />
              {errors.address?.houseNumber && touched.address?.houseNumber ? (
                <ErrorPara data-testid={paraTestId.par6}>
                  *{errors.address.houseNumber}
                </ErrorPara>
              ) : null}
              <Input
                data-testid={FormValue.CITY}
                value={values.address.city}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="city"
                name="address.city"
              />
              {errors.address?.city && touched.address?.city ? (
                <ErrorPara data-testid={paraTestId.par7}>
                  *{errors.address.city}
                </ErrorPara>
              ) : null}
              <Button data-testid={FormValue.BUTTON} type="submit">
                {loading ? "Load..." : "submit"}
              </Button>
            </form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Signup;
