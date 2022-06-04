import styled from "styled-components";
import ProductList from "../Product/ProductList";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StoreName = styled.h3`
  border-bottom: 1px solid black;
`;

const ListItem = styled.li``;

function GroceryListItem({ storeName }) {
  return (
    <Container>
      <StoreName>{storeName}</StoreName>
      <ProductList />
    </Container>
  );
}

export default GroceryListItem;
