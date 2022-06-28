import styled from "styled-components";
import { ListWithBorder } from "../../constants/styles";
import Product from "../Product/Product";

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
          groceryList.map((product) => {
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
          })
        )}
      </ProductList>
    </Container>
  );
}

export default GroceryList;
