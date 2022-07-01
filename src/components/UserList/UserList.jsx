import styled from "styled-components";
import { ListWithBorder } from "../../constants/styles";
import UserListButton from "./UserListButton";
import UserListStore from "./UserListStore";

const Container = styled.div`
  flex: 1;
`;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ProductList = styled(ListWithBorder)``;

const Text = styled.p`
  text-align: center;
`;

function UserList({
  userList,
  listTitle,
  listText,
  storeNames,
  favoritesList,
  setFavoritesList,
  groceryList,
  setGroceryList,
  handleClearClick,
  clearButtonName,
}) {
  return (
    <Container>
      <Header>{listTitle} List</Header>
      <ProductList>
        {userList.length === 0 ? (
          <Text>{listText}</Text>
        ) : (
          storeNames
            .filter((storeName) => {
              return userList.some(
                (product) => product.storeName === storeName
              );
            })
            .map((storeName) => {
              return (
                <UserListStore
                  userList={userList}
                  storeName={storeName}
                  groceryList={groceryList}
                  setGroceryList={setGroceryList}
                  favoritesList={favoritesList}
                  setFavoritesList={setFavoritesList}
                  key={storeName}
                />
              );
            })
        )}
      </ProductList>
      <UserListButton
        handleClick={handleClearClick}
        buttonName={clearButtonName}
      />
    </Container>
  );
}

export default UserList;
