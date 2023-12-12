import Button from "Components/Button";
import React, { FC } from "react";
import styled from "styled-components";

interface Product {
  id?: string;
  name?: string;
  stock?: number;
  rate?: number;
  category?: string;
  quantity?: number;
}

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  width: 40%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`;

const Text = styled.p`
  margin: 0;
  color: #666;
`;

const Rate = styled.p`
  margin: 0;
  font-weight: bold;
  color: #008000;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const ProductCard: FC<Product> = ({
  id,
  name,
  stock,
  rate,
  category,
  quantity,
}) => {
  return (
    <CardContainer>
      <CardContent>
        <Title>{name}</Title>
        <Text>ID: {id}</Text>
        <Text>Stock: {stock}</Text>
        <Rate>Rate: ${rate}</Rate>
        <Text>Category: {category}</Text>
        <ButtonContainer>
          <Button>-</Button>
          <Text>Qty: {quantity} </Text>
          <Button>+</Button>
        </ButtonContainer>
        <Button>Add to Cart</Button>
        <Button>Add to Wishlist</Button>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;
