import styled from "styled-components";
import Product from "../Product/Product";

import { BORDER, LIST } from "../../constants/styles";

const Container = styled.div`
  grid-column: 3 / -1;
  align-self: stretch;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const List = styled.ul`
  ${[BORDER.MAIN]}
  ${[LIST.PRODUCT]}
`;

const FavoritesText = styled.p`
  text-align: center;
`;

function FavoritesList({ favorites, groceryList }) {
  return (
    <Container>
      <Header>Favorites List</Header>
      <List>
        {Object.keys(favorites).length === 0 ? (
          <FavoritesText>Add to favorites</FavoritesText>
        ) : (
          Object.values(favorites).map((product, i) => (
            <Product
              product={product}
              favorites={favorites}
              groceryList={groceryList}
              key={i}
            />
          ))
        )}
      </List>
    </Container>
  );
}

export default FavoritesList;
