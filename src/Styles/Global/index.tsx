import React from "react";
import Navbar from "Components/NavBar";
import Footer from "Components/Footer";
import AppContents from "AppContents";
// import { NavBarContainer, AppContainer } from "./index.style";
import {
  NavBarContainer,
  GlobalContainer,
  AppContainer,
  FooterContainer,
} from "./index.style";

const GlobalLayout = () => {
  return (
    <>
      <GlobalContainer>
        <NavBarContainer>
          <Navbar />
        </NavBarContainer>
        <AppContainer>
          <AppContents />
        </AppContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </GlobalContainer>
    </>
  );
};

export default GlobalLayout;
