import styled from "styled-components";
import Product from "../Product/Product";
import ProductList from "../Product/ProductList";
import { BORDER } from "../../constants/styles";

const Container = styled.div`
  grid-column: 3 / -1;
  align-self: stretch;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ListContainer = styled.div`
  ${[BORDER.MAIN]}
`;

function FavoritesList() {
  return (
    <Container>
      <Title>Favorites List</Title>
      <ListContainer>
        <ProductList />
      </ListContainer>
    </Container>
  );
}

export default FavoritesList;
