import Button from "Components/Button";
import React, { FC, useEffect, useState } from "react";
import {
  CardContainer,
  CardContent,
  Title,
  Text,
  Rate,
  ButtonContainer,
} from "./index.style";
import { useAppDispatch, useAppSelector } from "store";
import { cartActions, fetchAddToCart } from "Slices/Cart";
import { useNavigate } from "react-router-dom";
import { ProductState } from "./index.type";
import { productCardConstant } from "Constants/testConstants";
import { Product } from "Slices/Product/index.type";

export interface AddToCartWishGlobReq {
  _id?: string;
  productId: string;
  isInCart?: boolean;
  isInWishList?: boolean;
  quantity?: number;
}

const ProductCard: FC<Product> = ({
  _id,
  title,
  stock,
  rating,
  category,
  quantity,
  price,
  isInCart,
  isInWishList,
}) => {
  const { addToCart, addToWishList, removeFromCart, removeFromWishList } =
    cartActions;

  const {
    _id: cartId,
    isInCartList,
    isInWishlist,
  } = useAppSelector((state) => state.cart);

  const [productState, setProductState] = useState<ProductState>({
    isInCart,
    isInWishList,
  });

  const [qty, setQty] = useState(quantity || 0);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const AddToServer = () => {
    dispatch(
      fetchAddToCart({
        _id: cartId,
        productId: _id || "",
        isInCart: productState.isInCart,
        isInWishList: productState.isInWishList,
        quantity: qty,
      })
    );
  };
  useEffect(() => {}, [dispatch, productState, qty]);

  const handleCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const { target } = event;
    const button = target as HTMLButtonElement;

    isInCartList[button.id]
      ? dispatch(removeFromCart(button.id))
      : dispatch(addToCart(button.id));

    setProductState({
      ...productState,
      isInCart: !productState.isInCart,
    });
    AddToServer();
  };

  const handleWishList = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const { target } = event;
    const button = target as HTMLButtonElement;

    isInWishlist[button.id]
      ? dispatch(removeFromWishList(button.id))
      : dispatch(addToWishList(button.id));

    setProductState({
      ...productState,
      isInWishList: !productState.isInWishList,
    });
    AddToServer();
  };

  const handleIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setQty(qty + 1);
    AddToServer();
  };

  const handleDecrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    qty === 0 ? setQty(0) : setQty(qty - 1);
    AddToServer();
  };

  const handleNavigate = () => {
    navigate(`/product/${_id}`);
  };
  console.log(isInCartList, "carts", cartId);
  return (
    <CardContainer onClick={handleNavigate}>
      <CardContent>
        <Title data-testid={productCardConstant.TITLE_ID}>{title}</Title>
        {/* <Text data-testid={productCardConstant.ID_ID}>ID: {id}</Text> */}
        <Text data-testid={productCardConstant.STOCK_ID}>Stock: {stock}</Text>
        <Rate data-testid={productCardConstant.RATE_ID}>
          Rate: {rating && typeof rating === "object" ? rating.rate : rating}
        </Rate>
        <Text data-testid={productCardConstant.PRICE_ID}>Price: ${price}</Text>
        <Text data-testid={productCardConstant.CATEGORY_ID}>
          Category: {category}
        </Text>
        <ButtonContainer>
          <Button
            data-testid={productCardConstant.DECREMENT_BUTTON_ID}
            id={_id}
            onClick={handleDecrement}
          >
            -
          </Button>
          <Text data-testid={productCardConstant.QUANTITY_ID}>Qty: {qty}</Text>
          <Button
            data-testid={productCardConstant.INCREMENT_BUTTON_ID}
            id={_id}
            onClick={handleIncrement}
          >
            +
          </Button>
        </ButtonContainer>
        <Button
          data-testid={productCardConstant.CART_BUTTON_ID}
          id={_id}
          onClick={(e) => handleCart(e)}
        >
          {productState.isInCart ? "Remove From Cart" : "Add to Cart"}
        </Button>
        <Button
          data-testid={productCardConstant.WISHLIST_BUTTON_ID}
          id={_id}
          onClick={(e) => handleWishList(e)}
        >
          {productState.isInWishList
            ? "Remove From WishList"
            : "Add to Wishlist"}
        </Button>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;
