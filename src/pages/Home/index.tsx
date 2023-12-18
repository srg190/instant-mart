import React, { useEffect } from "react";
import { H1, H4, H6 } from "Components/Typography";
import "./index.css";
import Box from "Components/Box";
import FlexBetween from "Components/FlexBox";
import { CategoryBox, CategoryContainer } from "./index.style";
import ProductCard from "Components/ProductCard";
import { RootState } from "store";
import { ProductState, Product } from "Slices/Product/index.type";
import { fetchCategories, fetchProducts } from "Slices/Product";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import Button from "Components/Button";
import { productActions } from "Slices/Product";

const Home = () => {
  const { error, loading, filteredProducts, categories }: ProductState =
    useSelector<RootState, ProductState>((state) => state.product);
  const { filterData } = productActions;
  const dispatch = useAppDispatch();

  // const [click, setClick] = useState<boolean>(false);
  useEffect(() => {
    return () => {
      dispatch(fetchCategories());
      dispatch(fetchProducts());
    };
  }, []);

  const handleCatFilter = (category: string) => {
    dispatch(filterData({ category }));
  };

  return (
    <>
      <FlexBetween justifyContent="centre" width="100%" height="100%">
        <CategoryContainer>
          Category
          {categories &&
            categories.map((v, i) => (
              <div onClick={() => handleCatFilter(v)}>
                <CategoryBox key={i}>
                  <H6>{v}</H6>
                </CategoryBox>
              </div>
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
                isInCart={v.isInCart}
                isInWishList={v.isInWishList}
              />
            ))
          )}
        </Box>
      </FlexBetween>
    </>
  );
};

export default Home;
