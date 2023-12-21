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
import { cartActions } from "Slices/Cart";
import { useNavigate } from "react-router-dom";
import { ProductState } from "./index.type";
import { productCardConstant } from "Constants/testConstants";
import { Product } from "Slices/Product/index.type";

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
  const { products } = useAppSelector((state) => state.product);
  const [productState, setProductState] = useState<ProductState>({
    isInCart,
    isInWishList,
  });
  const [qty, setQty] = useState(quantity || 0);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  useEffect(() => {}, [dispatch]);

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const { target } = event;
    const button = target as HTMLButtonElement;
    const item = products.filter((v) => v._id == button.id);
    if (productState.isInCart) {
      dispatch(removeFromCart(item[0]));
    } else {
      const data: Product = {
        ...item[0],
        isInCart: true,
        _id,
      };
      dispatch(addToCart(data));
    }
    setProductState({
      ...productState,
      isInCart: !productState.isInCart,
    });
  };

  const handleAddToWishList = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const { target } = event;
    const button = target as HTMLButtonElement;
    const item = products.filter((v) => v._id == button.id);
    if (productState.isInWishList) {
      dispatch(removeFromWishList(item[0]));
    } else {
      const data: Product = {
        ...item[0],
        isInWishList: true,
        _id,
      };
      dispatch(addToWishList(data));
    }
    setProductState({
      ...productState,
      isInWishList: !productState.isInWishList,
    });
  };

  const handleIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setQty(qty + 1);
  };

  const handleDecrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    qty === 0 ? setQty(0) : setQty(qty - 1);
  };

  const handleNavigate = () => {
    navigate(`/product/${_id}`);
  };

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
          onClick={(e) => handleAddToCart(e)}
        >
          {productState.isInCart ? "Remove From Cart" : "Add to Cart"}
        </Button>
        <Button
          data-testid={productCardConstant.WISHLIST_BUTTON_ID}
          id={_id}
          onClick={(e) => handleAddToWishList(e)}
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
