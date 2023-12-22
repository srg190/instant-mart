import React, { useEffect } from "react";
import { H1, H4, H6 } from "Components/Typography";
import "./index.css";
import Box from "Components/Box";
import FlexBetween from "Components/FlexBox";
import { CategoryBox, CategoryContainer } from "./index.style";
import ProductCard from "Components/ProductCard";
import { RootState, useAppSelector } from "store";
import { ProductState, Product } from "Slices/Product/index.type";
import { fetchCategories, fetchProducts } from "Slices/Product";
import { useSelector } from "react-redux";
import { useAppDispatch } from "store";
import { productActions } from "Slices/Product";
import { productCardConstant } from "Constants/testConstants";
import Pagination from "Components/Pagination";

const Home = () => {
  const { error, loading, filteredProducts, categories }: ProductState =
    useSelector<RootState, ProductState>((state) => state.product);
  const { filterData } = productActions;
  const { isInCartList, isInWishlist } = useAppSelector((state) => state.cart);
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
    if (filteredProducts && filteredProducts.length <= 10) {
      dispatch(fetchProducts({ category }));
    }
  };

  return (
    <>
      <FlexBetween justifyContent="centre" width="100%" height="100%">
        <CategoryContainer>
          Category
          {categories &&
            categories.map((v, i) => (
              <div key={v} onClick={() => handleCatFilter(v)}>
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
                data-testid={productCardConstant.TEST_ID}
                _id={v._id}
                key={i}
                title={v.title}
                category={v.category}
                rating={v.rating}
                price={v.price}
                stock={v.stock}
                quantity={0}
                isInCart={isInCartList[v._id || ""]}
                isInWishList={isInWishlist[v._id || ""]}
                description={v.description}
                brand={v.brand}
              />
            ))
          )}

          <Pagination />
        </Box>
      </FlexBetween>
    </>
  );
};

export default Home;
