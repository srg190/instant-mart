const darktheme = {
  primary: "#00bcd4",
  secondary: "#f3f3f3",
  border: "#e0e0e0",
  text: "#fff",
  background: "#212121",
  indicator: "#FFCC00",
};
const typography = {
  fontFamily: ["Rubik", "sans-serif"].join(","),
  fontSize: "12px",
  h1: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    fontSize: "40px",
  },
  h2: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    fontSize: "32px",
  },
  h3: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    fontSize: "24px",
  },
  h4: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    fontSize: "20px",
  },
  h5: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    fontSize: "16px",
  },
  h6: {
    fontFamily: ["Rubik", "sans-serif"].join(","),
    fontSize: "14px",
  },
};
const lightTheme = {
  primary: "#331D2C",
  secondary: "#3F2E3E",
  border: "#A78295",
  text: "#EFE1D1",
  background: "#F5F5F5", // A light gray background
  indicator: "#666666", // A darker gray for indicators
};

const defaultTheme = {
  typography: { ...typography },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
  },
  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "15px",
    circle: "50%",
  },
};
const theme = {
  dark: {
    color: darktheme,
    ...defaultTheme,
  },
  light: {
    color: lightTheme,
    ...defaultTheme,
  },
};
export default theme;
