import React from "react";
import { Ul, Li, A, SearchBarContainer } from "./index.style";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import Counter from "Components/Counter";
import SearchBar from "Components/SearchBar";
import { useAppSelector } from "store";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartItems, wishList } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    // <NavBarContainer>
    <Ul>
      <Li>
        <A onClick={handleNavigation}>Home</A>
      </Li>
      <Li>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
      </Li>
      <Li style={{ float: "right" }}>
        <A href="/wishlist-items">
          <FaRegHeart />
          <Counter numberOfItems={wishList.length} />
        </A>
      </Li>
      <Li style={{ float: "right" }}>
        <A href="/cart-items">
          <FaShoppingCart />
          <Counter numberOfItems={cartItems.length} />
        </A>
      </Li>
    </Ul>
    // </NavBarContainer>
  );
};

export default Navbar;
