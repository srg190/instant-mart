import React from "react";
import * as S from "./index.style";
import { H1, H4 } from "Components/Typography";
import "./index.css";
import Box from "Components/Box";
import FlexBetween from "Components/FlexBox";
import { LeftBox, RightBox, Div, FlexJustify } from "./index.style";
import ProductCard from "Components/ProductCard";
const Home = () => {
  return (
    <>
      <FlexBetween justifyContent="centre" width="100%" height="100%">
        <Box width="30%" height="100vh" justifyContent="center">
          <Box width="80%">Category</Box>
          <H4>Sub-category</H4>
        </Box>
        <Box
          width="70%"
          height="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          // flexGrow="1"
        >
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
          <ProductCard name="Computer" />
        </Box>
      </FlexBetween>

      {/* <FlexBetween justifyContent="center" alignItems="center">
        <Box style={{ width: "30%", height: "100%" }}>
          Hello
          </Box>
          <Box style={{ width: "2%", height: "100%" }} />
        <Box style={{ width: "65%", height: "100%" }}>
          Hello
        </Box>
      </FlexBetween>

      <FlexBetween justifyContent="center" alignItems="center">
        <Box style={{ width: "30%", height: "100%" }}>
          Hello
        </Box>
        <Box style={{ width: "2%", height: "100%" }} />
        <Box style={{ width: "65%", height: "100%" }}>
          Hello
        </Box>
      </FlexBetween> */}
    </>
  );
};

export default Home;
