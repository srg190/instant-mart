import React from "react";
import { Ul, Li, A, SearchBarContainer, NavBarContainer } from "./index.style";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import Counter from "Components/Counter";
import SearchBar from "Components/SearchBar";

const Navbar = () => {
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
            <Counter numberOfItems={10} />
          </A>
        </Li>
        <Li style={{ float: "right" }}>
          <A className="active" href="#cart">
            <FaShoppingCart />
            <Counter numberOfItems={8} />
          </A>
        </Li>
      </Ul>
    // </NavBarContainer>
  );
};

export default Navbar;
