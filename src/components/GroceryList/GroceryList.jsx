import styled from "styled-components";
import { ListWithBorder } from "../../constants/styles";
import GroceryListStore from "./GroceryListStore";

const Container = styled.div`
  grid-column: 1 / 3;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ProductList = styled(ListWithBorder)``;

const Text = styled.p`
  text-align: center;
`;

function GroceryList({
  storeNames,
  groceryList,
  setGroceryList,
  favoritesList,
  setFavoritesList,
}) {
  return (
    <Container>
      <Header>Grocery List</Header>
      <ProductList>
        {groceryList.length === 0 ? (
          <Text>Add to grocery list</Text>
        ) : (
          storeNames
            .filter((storeName) => {
              return groceryList.some(
                (product) => product.storeName === storeName
              );
            })
            .map((storeName) => {
              return (
                <GroceryListStore
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

export default GroceryList;
