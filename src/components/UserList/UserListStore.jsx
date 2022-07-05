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
  return (
    <Container>
      <StoreName>{storeTitle}</StoreName>
      <ProductList>
        {userList
          .filter((product) => product.storeTitle === storeTitle)
          .map((product) => {
            return (
              <Product
                product={product}
                groceryList={groceryList}
                setGroceryList={setGroceryList}
                favoritesList={favoritesList}
                setFavoritesList={setFavoritesList}
                onUserStoreList={true}
                key={product._id}
              />
            );
          })}
      </ProductList>
    </Container>
  );
}

export default UserListStore;
