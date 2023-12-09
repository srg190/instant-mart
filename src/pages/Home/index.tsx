import React from "react";
import * as S from "./index.style";
import { H1 } from "Components/Typography";
// import "./index.css";
const Home = () => {
  return (
    <>
      <div>
        <S.DivFlexContainer>
          <S.childDivContainer>
            <S.childContent>Burger Icon</S.childContent>
            <input type="text" /> <span>Search</span>
          </S.childDivContainer>
          <S.childDivContainer>
            <S.childContent>Cart</S.childContent>
            <S.childContent>Whislist/fav</S.childContent>
            <S.childContent>Profile</S.childContent>
          </S.childDivContainer>
        </S.DivFlexContainer>
        <S.contentDataContainer>
          <S.contentData>Data</S.contentData>
        </S.contentDataContainer>
      </div>
      <S.productCategoryContainer>
        <S.categoryContainer>
          <div>
            <h1>Category</h1>
            <div>
              <div>Category</div>
              <div>Category</div>
              <div>Category</div>
            </div>
          </div>
        </S.categoryContainer>
        <S.productContainer>
          <div>
            <h1>Product</h1>
            <div>
              <div>products</div>
              <div>products</div>
              <div>products</div>
              <div>products</div>
              <div>products</div>
              <div>products</div>
              <div>products</div>
              <div>products</div>
              <div>products</div>
              <div>products</div>
            </div>
          </div>
        </S.productContainer>
      </S.productCategoryContainer>
      {/* <S.Footer>
        <div>
          <div>Footer</div>
          <div>Footer</div>
          <div>Footer</div>
          <div>Footer</div>
          <div>Footer</div>
        </div>
      </S.Footer> */}
    </>
  );
};

export default Home;
