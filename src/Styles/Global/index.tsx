import React from "react";
import Navbar from "components/NavBar";

const GlobalLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>AppContents</div>
        <div>AppFooter</div>
      </div>
    </>
  );
};

export default GlobalLayout;
