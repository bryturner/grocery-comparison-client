import styled from "styled-components";

const Container = styled.div`
  padding: 0 0.5rem;
`;

const StoreTitle = styled.h3`
  border-bottom: 1px solid black;
  padding: 0 0 0.5rem 1rem;
  /* padding-bottom: 0.5rem; */
`;

function UserListStoreTitle({ storeTitle }) {
  return (
    <Container>
      <StoreTitle>{storeTitle}</StoreTitle>
    </Container>
  );
}

export default UserListStoreTitle;
