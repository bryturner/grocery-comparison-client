import styled from "styled-components";
import UserListStore from "./UserListStore";
import { storeTitles } from "../../data";
import ListHeading from "../Headings/ListHeading";

const Container = styled.div`
  background-color: ${(props) => props.theme.color.lightBlue};
  border-radius: 8px;
  overflow: hidden;
`;

const ListContainer = styled.div`
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

const listType = "userList";

function UserList({ userList, listHeading, listText }) {
  return (
    <Container>
      <ListHeading heading={listHeading} listType={listType} />
      <ListContainer>
        <ProductList>
          {Object.keys(userList).length === 0 ? (
            <Text>{listText}</Text>
          ) : (
            storeTitles
              .filter((storeTitle) => {
                return Object.values(userList).some(
                  (product) => product.storeTitle === storeTitle
                );
              })
              .map((storeTitle) => {
                return (
                  <UserListStore
                    userList={userList}
                    storeTitle={storeTitle}
                    listType={listType}
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
