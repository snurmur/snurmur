import React from "react";
import { useProduct } from "../../context/ProductContext";
import styled from "styled-components";

const Container = styled.div`
  .size-text {
    color: #9f9f9f;
    font-weight: 400;
    font-size: 0.8rem;
    font-style: normal;
    line-height: normal;
    margin-bottom: 3%;
  }

  .size-btn {
    display: flex;
    gap: 3%;
    margin-bottom: 0.8rem;
  }
`;

const Button = styled.button`

  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(250, 244, 244, 1);
  border: 1px solid rgba(250, 244, 244, 1);
  cursor: pointer;

  &:focus {
    background-color: rgba(251, 235, 181, 1);
    border: 1px solid rgba(251, 235, 181, 1);
  `;

const SizeButtons = ({ productId }) => {
  const product = useProduct();

  // Find the selected product based on productId
  const selectedProduct = product.find((p) => p.id === productId);

  if (!selectedProduct) {
    return null; // Handle the case when the product is not found
  }

  return (
    <div>
      <Container>
        <div className="size-text">Size</div>
        <div className="size-btn">
          {selectedProduct.sizes.map((size) => (
            <Button key={size}>{size} </Button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SizeButtons;
