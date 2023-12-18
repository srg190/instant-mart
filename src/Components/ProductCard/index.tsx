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

interface Product {
  id?: string;
  name?: string;
  stock?: number;
  rate?: number;
  category?: string;
  quantity?: number;
  isInCart?: boolean;
  isInWishList?: boolean;
  price?: number;
}

interface ProductState {
  isInCart: boolean | undefined;
  isInWishList: boolean | undefined;
}

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
        <Title>{name}</Title>
        <Text>ID: {id}</Text>
        <Text>Stock: {stock}</Text>
        <Rate>Rate: {rate}</Rate>
        <Text>Price: ${price}</Text>
        <Text>Category: {category}</Text>
        <ButtonContainer>
          <Button id={id}>-</Button>
          <Text>Qty: {quantity} </Text>
          <Button id={id}>+</Button>
        </ButtonContainer>
        <Button id={id} onClick={(e) => handleAddToCart(e)}>
          {productState.isInCart ? "Remove From Cart" : "Add to Cart"}
        </Button>
        <Button id={id} onClick={(e) => handleAddToWishList(e)}>
          {productState.isInWishList
            ? "Remove From WishList"
            : "Add to Wishlist"}
        </Button>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;
