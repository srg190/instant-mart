import ProductCard from "Components/ProductCard";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "store";
import Box from "Components/Box";

const WishItems = () => {
  const { wishList } = useAppSelector((state) => state.cart);
  // useEffect(() => {}, [wishList]);

  return (
    <Box width="100%" flexWrap="wrap" display="flex" justifyContent="center">
      {wishList &&
        wishList.map((v, i) => (
          <ProductCard
            key={i}
            name={v.title}
            category={v.category}
            rate={v.rating}
            price={v.price}
            stock={v.stock}
            id={"" + v._id}
            quantity={0}
            isInCart={v.isInCart}
            isInWishList={v.isInWishList}
          />
        ))}
    </Box>
  );
};

export default WishItems;
