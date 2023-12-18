import React, { useEffect, useMemo } from "react";
import * as S from "./index.style";
import { H1, H4 } from "Components/Typography";
import "./index.css";
import Box from "Components/Box";
import FlexBetween from "Components/FlexBox";
import { LeftBox, RightBox, Div, FlexJustify } from "./index.style";
import ProductCard from "Components/ProductCard";
import { store, RootState } from "store";
import { ProductState, fetchProducts, Product } from "Slices/Product";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";

const Home = () => {
  const { error, loading, products, filteredProducts }: ProductState =
    useSelector<RootState, ProductState>((state) => state.product);
  const dispatch = useAppDispatch();
  // console.log(products, "Products");
  useMemo(() => {
    return dispatch(fetchProducts());
  }, []);
  // id, name, stock, rate, category
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
        >
          {loading ? (
            <div>Loading...</div>
          ) : (
            filteredProducts &&
            filteredProducts.map((v: Product, i: number) => (
              <ProductCard
                key={i}
                name={v.title}
                category={v.category}
                rate={v.price}
                stock={Math.ceil(Math.random() * 100)}
                id={"" + v.id}
                quantity={Math.ceil(Math.random() * 10)}
              />
            ))
          )}
        </Box>
      </FlexBetween>
    </>
  );
};

export default Home;
