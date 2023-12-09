import React from "react";
import Navbar from "Components/NavBar";
import Footer from "Components/Footer";
import AppContents from "AppContents";
// import { NavBarContainer, AppContainer } from "./index.style";

const GlobalLayout = () => {
  return (
    <>
      <Navbar />
      <AppContents />
      <Footer />
    </>
  );
};

export default GlobalLayout;
