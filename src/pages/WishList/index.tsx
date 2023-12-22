import ProductCard from "Components/ProductCard";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "store";
import Box from "Components/Box";

const WishList = () => {
  const { wishList, isInWishlist, isInCartList } = useAppSelector(
    (state) => state.cart
  );

  return (
    <Box width="100%" flexWrap="wrap" display="flex" justifyContent="center">
      {wishList &&
        wishList.map((v, i) => (
          <ProductCard
            key={i}
            title={v.title}
            category={v.category}
            rating={v.rating}
            price={v.price}
            stock={v.stock}
            _id={v._id}
            quantity={0}
            isInCart={isInCartList[v._id]}
            isInWishList={isInWishlist[v._id]}
            description={v.description}
            brand={v.brand}
          />
        ))}
    </Box>
  );
};

export default WishList;
