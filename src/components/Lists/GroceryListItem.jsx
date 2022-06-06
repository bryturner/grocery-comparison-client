import styled from "styled-components";
import { LIST } from "../../constants/styles";
import Product from "../Product/Product";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StoreName = styled.h3`
  border-bottom: 1px solid black;
`;

const ProductList = styled.ul`
  ${[LIST.PRODUCT]}
`;

function GroceryListItem({ storeName }) {
  return (
    <Container>
      <StoreName>{storeName}</StoreName>
      <ProductList>
        <Product />
      </ProductList>
    </Container>
  );
}

export default GroceryListItem;
