import styled from "styled-components";
import Product from "../Product/Product";

import { ListWithBorder } from "../../constants/styles";

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
          favoritesList.map((product) => (
            <Product
              product={product}
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
              groceryList={groceryList}
              setGroceryList={setGroceryList}
              key={product._id}
            />
          ))
        )}
      </ProductList>
    </Container>
  );
}

export default FavoritesList;
