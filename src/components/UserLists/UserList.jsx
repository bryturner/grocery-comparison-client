import styled from "styled-components";
import UserListStore from "./UserListStore";
import { storeTitles } from "../../data";

const Container = styled.div``;

const Header = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ListContainer = styled.div`
  border: 2px solid ${(props) => props.theme.color.medGray};
  border-radius: 8px;
  padding: 1rem 0;
  height: 25rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Text = styled.p`
  text-align: center;
`;

function UserList({ userList, listTitle, listText }) {
  return (
    <Container>
      <Header>{listTitle}</Header>
      <ListContainer>
        <ProductList>
          {userList.length === 0 ? (
            <Text>{listText}</Text>
          ) : (
            storeTitles
              .filter((storeTitle) => {
                return userList.some(
                  (product) => product.storeTitle === storeTitle
                );
              })
              .map((storeTitle) => {
                return (
                  <UserListStore
                    userList={userList}
                    storeTitle={storeTitle}
                    key={storeTitle}
                  />
                );
              })
          )}
        </ProductList>
      </ListContainer>
    </Container>
  );
}

export default UserList;
