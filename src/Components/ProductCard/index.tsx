import Button from "Components/Button";
import React, { FC } from "react";
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

interface Product {
  id?: string;
  name?: string;
  stock?: number;
  rate?: number;
  category?: string;
  quantity?: number;
  isInCart?: boolean;
  isInWishList?: boolean;
}

const ProductCard: FC<Product> = ({
  id,
  name,
  stock,
  rate,
  category,
  quantity,
}) => {
  const { addToCart, addToWishList } = cartActions;
  const { products } = useAppSelector((state) => state.product);
  const { cartItems, wishList } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { target } = event;
    const button = target as HTMLButtonElement;

    const item = products.filter((v) => v.id === parseInt(button.id, 10));
    console.log(item);
  };

  const handleDecrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { target } = event;
    const button = target as HTMLButtonElement;

    const item = products.filter((v) => v.id === parseInt(button.id, 10));
    console.log(item);
  };

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { target } = event;
    const button = target as HTMLButtonElement;
    const item = products.filter((v) => v.id === parseInt(button.id, 10));
    const data: Product = {
      ...item[0],
      isInCart: true,
      id: id + "",
    };
    dispatch(addToCart(data));
  };

  const handleAddToWishList = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { target } = event;
    const button = target as HTMLButtonElement;
    const item = products.filter((v) => v.id === parseInt(button.id, 10));
    const data: Product = {
      ...item[0],
      isInWishList: true,
      id: id + "",
    };
    dispatch(addToWishList(data));
  };
  return (
    <CardContainer>
      <CardContent>
        <Title>{name}</Title>
        <Text>ID: {id}</Text>
        <Text>Stock: {stock}</Text>
        <Rate>Rate: ${rate}</Rate>
        <Text>Category: {category}</Text>
        <ButtonContainer>
          <Button id={id} onClick={(e) => handleDecrement(e)}>
            -
          </Button>
          <Text>Qty: {quantity} </Text>
          <Button id={id} onClick={(e) => handleIncrement(e)}>
            +
          </Button>
        </ButtonContainer>
        <Button id={id} onClick={(e) => handleAddToCart(e)}>
          {cartItems.find((x) => x.id === id)
            ? "Remove From Cart"
            : "Add to Cart"}
        </Button>
        <Button id={id} onClick={(e) => handleAddToWishList(e)}>
          {wishList.find((x) => x.id === id)
            ? "Remove From WishList"
            : "Add to Wishlist"}
        </Button>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;
