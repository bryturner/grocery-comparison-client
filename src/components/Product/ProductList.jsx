import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #555;
  border-radius: 8px;
  padding: 0.5rem;
  height: 24rem;
`;

function ProductList() {
  return (
    <Container>
      <Product></Product>
    </Container>
  );
}

export default ProductList;
