import { fetchProductDetail } from "Slices/Product";
import { Product } from "Slices/Product/index.type";
import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import styled from "styled-components";

const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const ProductImage = styled.img`
  object-fit: cover;
  margin: 10px;
  border-redius: 16px;
`;

const ProductInfo = styled.div`
  max-width: 600px;
  margin: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const DetailItem = styled.div`
  margin-bottom: 10px;
`;

const ProductDetail = ({ product }: { product: Product }) => {
  const {
    title,
    description,
    price,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    discountPercentage,
  } = product;

  return (
    <ProductDetailContainer>
      <ProductImage src={thumbnail} alt={title} />
      <ProductInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <DetailItem>
          <strong>Brand:</strong> {brand}
        </DetailItem>
        <DetailItem>
          <strong>Category:</strong> {category}
        </DetailItem>
        <DetailItem>
          <strong>Price:</strong> ${price}
        </DetailItem>
        <DetailItem>
          <strong>Rating:</strong> {rating}
        </DetailItem>
        <DetailItem>
          <strong>Stock:</strong> {stock}
        </DetailItem>
        <DetailItem>
          <strong>Discount Percentage:</strong> {discountPercentage}%
        </DetailItem>
      </ProductInfo>
    </ProductDetailContainer>
  );
};

const ProductContainer = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const dispatch = useAppDispatch();
  const { product, error, loading } = useAppSelector((state) => state.product);
  useMemo(() => {
    return dispatch(fetchProductDetail(productId));
  }, [dispatch, productId]);

  console.log(product, "productDetail");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  return <ProductDetail product={product} />;
};

export default ProductContainer;
