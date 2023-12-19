import Button from "Components/Button";
import React, { FC, useState } from "react";
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
import { Product, ProductState } from "./index.type";
import { productCardConstant } from "Constants/testConstants";

const ProductCard: FC<Product> = ({
  id,
  name,
  stock,
  rate,
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
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { target } = event;
    const button = target as HTMLButtonElement;
    const item = products.filter((v) => v.id == button.id);
    if (productState.isInCart) {
      dispatch(removeFromCart(item[0]));
    } else {
      const data: Product = {
        ...item[0],
        isInCart: true,
        id: id + "",
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
    const { target } = event;
    const button = target as HTMLButtonElement;
    const item = products.filter((v) => v.id == button.id);
    if (productState.isInWishList) {
      dispatch(removeFromWishList(item[0]));
    } else {
      const data: Product = {
        ...item[0],
        isInWishList: true,
        id: id + "",
      };
      dispatch(addToWishList(data));
    }
    setProductState({
      ...productState,
      isInWishList: !productState.isInWishList,
    });
  };

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  return (
    <CardContainer onClick={handleNavigate}>
      <CardContent>
        <Title data-testid={productCardConstant.TITLE_ID}>{name}</Title>
        <Text data-testid={productCardConstant.ID_ID}>ID: {id}</Text>
        <Text data-testid={productCardConstant.STOCK_ID}>Stock: {stock}</Text>
        <Rate data-testid={productCardConstant.RATE_ID}>Rate: {rate}</Rate>
        <Text data-testid={productCardConstant.PRICE_ID}>Price: ${price}</Text>
        <Text data-testid={productCardConstant.CATEGORY_ID}>
          Category: {category}
        </Text>
        <ButtonContainer>
          <Button
            data-testid={productCardConstant.DECREMENT_BUTTON_ID}
            id={"" + id}
          >
            -
          </Button>
          <Text data-testid={productCardConstant.QUANTITY_ID}>
            Qty: {quantity}
          </Text>
          <Button
            data-testid={productCardConstant.INCREMENT_BUTTON_ID}
            id={"" + id}
          >
            +
          </Button>
        </ButtonContainer>
        <Button
          data-testid={productCardConstant.CART_BUTTON_ID}
          id={"" + id}
          onClick={(e) => handleAddToCart(e)}
        >
          {productState.isInCart ? "Remove From Cart" : "Add to Cart"}
        </Button>
        <Button
          data-testid={productCardConstant.WISHLIST_BUTTON_ID}
          id={"" + id}
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
