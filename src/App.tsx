import React, { Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "Components/Loader";
import theme from "Styles/theme";
import { ThemeType } from "Styles/theme/index.type";

const GlobalLayout = React.lazy(() => import("Styles/Global"));
const SignIn = React.lazy(() => import("pages/Auth/SigninForm"));
const SignUp = React.lazy(() => import("pages/Auth/SignupForm"));
const Error404 = React.lazy(() => import("pages/Auth/404"));
const Error500 = React.lazy(() => import("pages/Auth/500"));

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");
  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="*" element={<GlobalLayout />} />
          </Routes>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
