import styled from "styled-components";
import { BORDER, LIST } from "../../constants/styles";
import Product from "../Product/Product";
import GroceryListItem from "./GroceryListItem";

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

function GroceryList({ groceryList, favorites }) {
  const displayStoreName = true;
  return (
    <Container>
      <Header>Grocery List</Header>
      <List>
        {Object.keys(groceryList).length === 0 ? (
          <Text>Add to grocery list</Text>
        ) : (
          Object.values(groceryList).map((product) => (
            <Product
              product={product}
              groceryList={groceryList}
              favorites={favorites}
              key={product._id}
              displayStoreName={displayStoreName}
            />
          ))
        )}
      </List>
    </Container>
  );
}

export default GroceryList;
