import { useState, useEffect } from "react";
import styled from "styled-components";
import { testProducts } from "../../data";
import UserList from "./UserList";
import UserListButton from "./UserListButton";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const ListContainer = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const UserLists = () => {
  const [groceryList, setGroceryList] = useState(testProducts);
  const [favoritesList, setFavoritesList] = useState([]);

  //   const getGroceryList = () => {
  //     const groceryListData = JSON.parse(localStorage.getItem("groceryList"));
  //     if (!groceryListData) return;
  //     setGroceryList(groceryListData);
  //   };

  //   const getFavoritesList = () => {
  //     const favoritesListData = JSON.parse(localStorage.getItem("favoritesList"));
  //     if (!favoritesListData) return;
  //     setFavoritesList(favoritesListData);
  //   };

  //   useEffect(() => {
  //     getGroceryList();
  //     getFavoritesList();
  //   }, []);
  return (
    <Container>
      <ListContainer>
        <UserList
          listTitle="Grocery List"
          listText="Click the plus icon to add to your grocery list"
          userList={groceryList}
          groceryList={groceryList}
          favoritesList={favoritesList}
          setGroceryList={setGroceryList}
          setFavoritesList={setFavoritesList}
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
          groceryList={groceryList}
          favoritesList={favoritesList}
          setGroceryList={setGroceryList}
          setFavoritesList={setFavoritesList}
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
