import React from "react";
import { Ul, Li, A } from "./index.style";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import Counter from "components/Counter";
import SearchBar from "components/SearchBar";

const Navbar = () => {
  return (
    <Ul>
      <Li>
        <A href="#home">Home</A>
      </Li>
      <Li>
        <A href="#news">
          <SearchBar />
        </A>
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
  );
};

export default Navbar;
