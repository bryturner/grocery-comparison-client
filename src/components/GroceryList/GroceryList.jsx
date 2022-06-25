import { useEffect } from "react";
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

function GroceryList({
  groceryList,
  userFavoritesList,
  products,
  user,
  setGroceryList,
  setUserFavoritesList,
}) {
  useEffect(() => {
    console.log(groceryList);
  }, []);
  return (
    <Container>
      <Header>Grocery List</Header>
      <List>
        {groceryList.length === 0 ? (
          <Text>Add to grocery list</Text>
        ) : (
          products
            .filter((product) => groceryList.includes(product._id))
            .map((product) => {
              <Product
                product={product}
                user={user}
                userFavoritesList={userFavoritesList}
                setUserFavoritesList={setUserFavoritesList}
                groceryList={groceryList}
                setGroceryList={setGroceryList}
                // selectedProduct={selectedProduct}
                // setSelectedProduct={setSelectedProduct}
                key={product._id}
              />;
            })
        )}
      </List>
    </Container>
  );
}

export default GroceryList;
