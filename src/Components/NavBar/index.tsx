import React from "react";
import { Ul, Li, A, SearchBarContainer, NavBarContainer } from "./index.style";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import Counter from "Components/Counter";
import SearchBar from "Components/SearchBar";
import { useAppSelector } from "store";

const Navbar = () => {
  const { cartItems, wishList } = useAppSelector((state) => state.cart);
  return (
    // <NavBarContainer>
    <Ul>
      <Li>
        <A href="#home">Home</A>
      </Li>
      <Li>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
      </Li>
      <Li style={{ float: "right" }}>
        <A href="#whishlist">
          <FaRegHeart />
          <Counter numberOfItems={wishList.length} />
        </A>
      </Li>
      <Li style={{ float: "right" }}>
        <A href="#cart">
          <FaShoppingCart />
          <Counter numberOfItems={cartItems.length} />
        </A>
      </Li>
    </Ul>
    // </NavBarContainer>
  );
};

export default Navbar;
