import styled from "styled-components";
import Product from "../Product/Product";

import { BORDER, LIST } from "../../constants/styles";
import { useContext } from "react";
import ProductsContext from "../../contexts/ProductsContext";

const Container = styled.div`
  grid-column: 3 / -1;
  align-self: stretch;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ProductList = styled.ul`
  ${[BORDER.MAIN]}
  ${[LIST.PRODUCT]}
`;

function FavoritesList() {
  const { favoritesList } = useContext(ProductsContext);

  return (
    <Container>
      <Title>Favorites List</Title>
      <ProductList></ProductList>
    </Container>
  );
}

export default FavoritesList;
