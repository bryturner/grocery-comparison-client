import { useEffect } from "react";
import styled from "styled-components";
import { BORDER, LIST } from "../../constants/styles";
import Product from "../Product/Product";

const Container = styled.div`
  grid-column: 1 / 3;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const List = styled.ul`
  ${[BORDER.MAIN]}
  ${[LIST.PRODUCT]}
`;

const Text = styled.p`
  text-align: center;
`;

function GroceryList({ groceryList, setGroceryList, userFavoritesList }) {
  return (
    <Container>
      <Header>Grocery List</Header>
      <List>
        {groceryList.length === 0 ? (
          <Text>Add to grocery list</Text>
        ) : (
          groceryList.map((product) => {
            return (
              <Product
                product={product}
                groceryList={groceryList}
                setGroceryList={setGroceryList}
                userFavoritesList={userFavoritesList}
                key={product._id}
              />
            );
          })
        )}
      </List>
    </Container>
  );
}

export default GroceryList;
