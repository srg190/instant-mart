import React, { useMemo, useState } from "react";
import { H1, H4, H6 } from "Components/Typography";
import "./index.css";
import Box from "Components/Box";
import FlexBetween from "Components/FlexBox";
import { CategoryBox, CategoryContainer } from "./index.style";
import ProductCard from "Components/ProductCard";
import { store, RootState } from "store";
import { ProductState, Product } from "Slices/Product/index.type";
import { fetchCategories, fetchProducts } from "Slices/Product";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import Button from "Components/Button";

const Home = () => {
  const {
    error,
    loading,
    products,
    filteredProducts,
    categories,
  }: ProductState = useSelector<RootState, ProductState>(
    (state) => state.product
  );
  const dispatch = useAppDispatch();
  const [click, setClick] = useState<boolean>(false);
  // console.log(products, "Products");
  useMemo(() => {
    if (click) {
      return () => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
      };
    }
  }, [click]);
  const handleCatFilter = (
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    console.log(e);
  };
  // id, name, stock, rate, category
  // console.log(categories, "Cat-data");
  return (
    <>
      <FlexBetween justifyContent="centre" width="100%" height="100%">
        <CategoryContainer>
          Category
          {categories &&
            categories.map((v, i) => (
              <CategoryBox key={i}>
                <H6 onClick={(e) => handleCatFilter(e)}>{v}</H6>
              </CategoryBox>
            ))}
        </CategoryContainer>
        <Box
          width="70%"
          height="100%"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
        >
          <H1 width="100%">Products</H1>
          {loading ? (
            <div>Loading...</div>
          ) : (
            filteredProducts &&
            filteredProducts.map((v: Product, i: number) => (
              <ProductCard
                key={i}
                name={v.title}
                category={v.category}
                rate={v.rating}
                price={v.price}
                stock={v.stock}
                id={"" + v.id}
                quantity={0}
              />
            ))
          )}
          <Button
            onClick={() => {
              dispatch(fetchProducts());
              dispatch(fetchCategories());
            }}
          >
            Click
          </Button>
        </Box>
      </FlexBetween>
    </>
  );
};

export default Home;
