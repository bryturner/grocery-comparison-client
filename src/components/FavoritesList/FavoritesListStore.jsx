import styled from "styled-components";
import { List } from "../../constants/styles";
import Product from "../Product/Product";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StoreName = styled.h3`
  border-bottom: 1px solid black;
`;

const ProductList = styled(List)``;

function FavoritesListStore({
  storeName,
  groceryList,
  setGroceryList,
  favoritesList,
  setFavoritesList,
}) {
  return (
    <Container>
      <StoreName>{storeName}</StoreName>
      <ProductList>
        {favoritesList
          .filter((product) => product.storeName === storeName)
          .map((product) => {
            return (
              <Product
                product={product}
                groceryList={groceryList}
                setGroceryList={setGroceryList}
                favoritesList={favoritesList}
                setFavoritesList={setFavoritesList}
                key={product._id}
              />
            );
          })}
      </ProductList>
    </Container>
  );
}

export default FavoritesListStore;
