import styled from "styled-components";
import Product from "../Product/Product";
import UserListStoreTitle from "./UserListStoreTitle";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StoreTitle = styled.h3`
  border-bottom: 1px solid black;
  padding: 0 0 0.5rem 1rem;
`;

const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 1rem;
`;

function UserListStore({ userList, storeTitle, listType }) {
  return (
    <Container>
      {/* <StoreTitle>{storeTitle}</StoreTitle> */}
      <UserListStoreTitle storeTitle={storeTitle} />
      <ProductList>
        {Object.values(userList)
          .filter((product) => product.storeTitle === storeTitle)
          .map((product) => (
            <Product product={product} listType={listType} key={product._id} />
          ))}
      </ProductList>
    </Container>
  );
}

export default UserListStore;
