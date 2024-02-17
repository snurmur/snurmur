import React from "react";
import styled from "styled-components";
import { useProduct } from "../../context/ProductContext";

const Container = styled.div`
  display: flex;
  gap: 3%;
  margin-bottom: 5%;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #816dfa;
  background-color: ${(props) => props.backgroundcolor};
  cursor: pointer;
`;

const ColorButtons = ({ productId }) => {
  const product = useProduct();

  const selectedProduct = product.find((p) => p.id === productId);

  if (!selectedProduct) {
    return <div>Product not found</div>; // Handle the case when the product is not found
  }

  if (!selectedProduct.colors || selectedProduct.colors.length === 0) {
    return <div>No available colors for this product</div>;
  }

  return (
    <>
      <p className="selected-product-color-text">Color</p>
      <Container>
        {selectedProduct.colors.map((color, index) => (
          <Button key={`${color}-${index}`} backgroundcolor={color} />
        ))}
      </Container>
    </>
  );
};

export default ColorButtons;
