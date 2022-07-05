import { useEffect } from "react";
import styled from "styled-components";
import { List } from "../../constants/styles";
import Product from "../Product/Product";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StoreTitle = styled.h3`
  border-bottom: 1px solid black;
`;

const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

function UserListStore({
  userList,
  storeTitle,
  groceryList,
  setGroceryList,
  favoritesList,
  setFavoritesList,
}) {
  useEffect(() => {
    console.log(groceryList);
  }, []);
  return (
    <Container>
      <StoreTitle>{storeTitle}</StoreTitle>
      <ProductList>
        {userList
          .filter((product) => product.storeTitle === storeTitle)
          .map((product) => (
            <Product product={product} />
          ))}
      </ProductList>
    </Container>
  );
}

export default UserListStore;
