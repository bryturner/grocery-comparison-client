import styled from "styled-components";
import UserList from "./UserList";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

function UserLists() {
  return (
    <Container>
      <UserList listTitle="GroceryList" />
      <UserList listTitle="Favorites List" />
    </Container>
  );
}

export default UserLists;
