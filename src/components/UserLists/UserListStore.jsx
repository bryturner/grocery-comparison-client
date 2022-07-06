import styled from "styled-components";
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

function UserListStore({ userList, storeTitle }) {
  return (
    <Container>
      <StoreTitle>{storeTitle}</StoreTitle>
      <ProductList>
        {userList
          .filter((product) => product.storeTitle === storeTitle)
          .map((product) => (
            <Product product={product} onUserStoreList key={product._id} />
          ))}
      </ProductList>
    </Container>
  );
}

export default UserListStore;
