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

function FavoritesList({
  userFavoritesList,
  setUserFavoritesList,
  groceryList,
}) {
  return (
    <Container>
      <Header>Favorites List</Header>
      <List>
        {userFavoritesList.length === 0 ? (
          <FavoritesText>Add to favorites</FavoritesText>
        ) : (
          userFavoritesList.map((product) => (
            <Product
              product={product}
              userFavoritesList={userFavoritesList}
              setUserFavoritesList={setUserFavoritesList}
              groceryList={groceryList}
              key={product._id}
            />
          ))
        )}
      </List>
    </Container>
  );
}

export default FavoritesList;
