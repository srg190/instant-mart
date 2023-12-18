export type ParaTestId = {
  [key: string]: string;
};

export const paraTestId = {
  par1: "para-1",
  par2: "para-2",
  par3: "para-3",
  par4: "para-4",
  par5: "para-5",
  par6: "para-6",
  par7: "para-7",
};

export enum FormValue {
  OUTSIDE = "outside",
  HEADING1 = "heading-1",
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirmPassword",
  STREET = "street",
  LOCATION = "location",
  CITY = "city",
  HOUSE_NUMBER = "houseNumber",
  BUTTON = "button",
}

export const UserMockData = {
  EMAIL: "abc190@gmail.com",
  PASSWORD: "123456",
  CONFIRM_PASSWORD: "123456",
  STREET: "Vijay",
  LOCATION: "India",
  HOUSE_NUMBER: "12/78",
  CITY: "Indore",
  INCORRECT_EMAIL: "abc190",
  LESS_THAN_REQUIRED_PASSWORD_SIZE: "1234",
  UNMATCH_CONFIRM_PASSWORD: "123457",
};

export const ValidationCycle = {
  EMPTY_EMAIL: "*Please provide email",
  EMPTY_PASSWORD: "*Please provide password",
  EMPTY_CONFIRM_PASSWORD: "*confirmPassoword is a required field",
  EMPTY_STREET: "*Please enter street",
  EMPTY_LOCATION: "*Please provide location",
  EMPTY_HOUSE_NUMBER: "*Please provide house number",
  EMPTY_CITY: "*Please provide city",
  INCORRECT_EMAIL: "*email must be a valid email",
  PASSWORD_LESS_THAN_ERROR: "*password must be at least 6 characters",
  PASSWORD_UNMATCH_ERROR: "*Password must match",
};

export const ButtonConstant = {
  BUTTON_TEXT: "Button",
  BUTTON_ID: "button-id",
  BUTTON_TEXT1: "Toggeled",
};
