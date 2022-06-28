import styled from "styled-components";
import Product from "../Product/Product";

import { ListWithBorder } from "../../constants/styles";
import FavoritesListStore from "./FavoritesListStore";

const Container = styled.div`
  grid-column: 3 / -1;
  align-self: stretch;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ProductList = styled(ListWithBorder)``;

const FavoritesText = styled.p`
  text-align: center;
`;

function FavoritesList({
  storeNames,
  favoritesList,
  setFavoritesList,
  groceryList,
  setGroceryList,
}) {
  return (
    <Container>
      <Header>Favorites List</Header>
      <ProductList>
        {favoritesList.length === 0 ? (
          <FavoritesText>Add to favorites</FavoritesText>
        ) : (
          storeNames
            .filter((storeName) => {
              return favoritesList.some(
                (product) => product.storeName === storeName
              );
            })
            .map((storeName) => {
              return (
                <FavoritesListStore
                  storeName={storeName}
                  groceryList={groceryList}
                  setGroceryList={setGroceryList}
                  favoritesList={favoritesList}
                  setFavoritesList={setFavoritesList}
                  key={storeName}
                />
              );
            })
        )}
      </ProductList>
    </Container>
  );
}

export default FavoritesList;
