import React from "react";
import { Ul, Li, A, SearchBarContainer } from "./index.style";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import Counter from "Components/Counter";
import SearchBar from "Components/SearchBar";
import { useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { navbarConstants } from "Constants/testConstants";

const Navbar = () => {
  const { isInCartList, isInWishlist } = useAppSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <Ul>
      <Li>
        <A onClick={handleNavigation}>Home</A>
      </Li>
      <Li>
        <SearchBarContainer>
          <SearchBar data-testid={navbarConstants.SEARCH_TEST_ID} />
        </SearchBarContainer>
      </Li>
      <Li style={{ float: "right" }}>
        <A href="/wishlist-items">
          <FaRegHeart />
          <Counter
            data-testid={navbarConstants.WISHLIST_TEST_IDL}
            numberOfItems={Object.keys(isInWishlist).length}
          />
        </A>
      </Li>
      <Li style={{ float: "right" }}>
        <A href="/cart-items">
          <FaShoppingCart />
          <Counter
            data-testid={navbarConstants.CART_TEST_ID}
            numberOfItems={Object.keys(isInCartList).length}
          />
        </A>
      </Li>
    </Ul>
    // </NavBarContainer>
  );
};

export default Navbar;
