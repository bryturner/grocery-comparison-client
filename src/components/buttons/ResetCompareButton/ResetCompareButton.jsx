import styled from "styled-components";
import React from "react";

const Container = styled.div`
  padding-left: 2rem;
`;

const ResetButton = styled.button`
  background: none;
  cursor: pointer;
  padding: 0.6rem 2rem;
  border-radius: 5px;
  transition: all 0.1s linear;
  border: 2px solid ${(props) => props.theme.buttonColor.primary};
  color: ${(props) => props.theme.buttonColor.secondaryText};

  &:hover {
    background: ${(props) => props.theme.buttonColor.secondaryHover};
  }
`;

function ResetCompareButton({
  setFilteredProducts,
  products,
  setSelectedProduct,
}) {
  const handleResetClick = () => {
    setFilteredProducts(products);
    setSelectedProduct(undefined);
  };

  return (
    <Container>
      <ResetButton onClick={() => handleResetClick()}>
        Reset Comparison
      </ResetButton>
    </Container>
  );
}

export default React.memo(ResetCompareButton);
