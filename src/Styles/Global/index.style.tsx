import styled from "styled-components";

export const NavBarContainer = styled.div`
  position: "fixed";
  top: 0;
  left: 0;
  right: 0;
  padding-bottom: "30px";
  z-index: 1000;
`;

export const AppContainer = styled.div`
  flex: 1;
  padding: "20px";
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const FooterContainer = styled.div`
  position: "fixed";
  bottom: 0;
  left: 0;
  right: 0;
  padding: "10px";
  z-index: 1000;
`;

export const GlobalContainer = styled.div`
  display: "flex";
  flex-direction: "column";
  width: "100vw";
  min-height: "100vh";
`;

export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensure container takes at least the full height of the viewport
  },
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "#333", // Set your Navbar background color
    color: "#fff", // Set your Navbar text color
    padding: "10px", // Adjust padding as needed
    zIndex: 1000, // Ensure Navbar is above other elements
  },
  appContents: {
    flex: 1, // Grow to fill available space
    padding: "20px", // Adjust padding as needed
    // Additional styling for AppContents if needed
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#333", // Set your Footer background color
    color: "#fff", // Set your Footer text color
    padding: "10px", // Adjust padding as needed
    zIndex: 1000, // Ensure Footer is above other elements
  },
};
