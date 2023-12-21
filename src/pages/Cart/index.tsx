import ProductCard from "Components/ProductCard";
import React, { useState } from "react";
import { useAppSelector } from "store";
import Box from "Components/Box";

const CartItems = () => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const [carts, setCarts] = useState(cartItems);
  console.log(carts, " --- items");
  return (
    <Box width="100%" flexWrap="wrap" display="flex" justifyContent="center">
      {carts &&
        carts.map((v, i) => (
          <ProductCard
            key={i}
            title={v.title}
            category={v.category}
            rating={v.rating}
            price={v.price}
            stock={v.stock}
            _id={"" + v._id}
            quantity={0}
            isInCart={v.isInCart}
            isInWishList={v.isInWishList}
            description={v.description}
            brand={v.brand}
          />
        ))}
    </Box>
  );
};

export default CartItems;
