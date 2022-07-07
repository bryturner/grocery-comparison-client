import { useContext } from "react";
import styled from "styled-components";
import UserListsContext from "../../contexts/UserListsContext";
import UserList from "./UserList";
import UserListButton from "./UserListButton";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const ListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  align-self: center;
  display: flex;
  gap: 2rem;
`;

const UserLists = () => {
  const { groceryList, favoritesList } = useContext(UserListsContext);

  return (
    <Container>
      <ListContainer>
        <UserList
          listTitle="Grocery List"
          listText="Click the plus icon to add to your grocery list"
          userList={groceryList}
        />
        <ButtonContainer>
          <UserListButton buttonText="Share grocery list" />
          <UserListButton buttonText="Clear grocery list" />
        </ButtonContainer>
      </ListContainer>
      <ListContainer>
        <UserList
          listTitle="Favorites List"
          listText="Click the heart icon to add to your favorites list"
          userList={favoritesList}
        />
        <ButtonContainer>
          <UserListButton buttonText="Share favorites list" />
          <UserListButton buttonText="Clear favorites list" />
        </ButtonContainer>
      </ListContainer>
    </Container>
  );
};

export default UserLists;
