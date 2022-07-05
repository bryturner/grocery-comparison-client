import styled from "styled-components";
import { ListWithBorder } from "../../constants/styles";
import UserListButton from "./UserListButton";
import UserListStore from "./UserListStore";
import { storeTitles } from "../../data";
import { useEffect } from "react";
import Product from "../Product/Product";

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

function UserList({
  userList,
  listTitle,
  listText,
  favoritesList,
  setFavoritesList,
  groceryList,
  setGroceryList,
}) {
  useEffect(() => {
    console.log(storeTitles);
  }, []);
  return (
    <Container>
      <Header>{listTitle}</Header>
      <ListContainer>
        <ProductList>
          {storeTitles
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
                  groceryList={groceryList}
                  setGroceryList={setGroceryList}
                  favoritesList={favoritesList}
                  setFavoritesList={setFavoritesList}
                  key={storeTitle}
                />
              );
            })}
        </ProductList>
      </ListContainer>
    </Container>
  );
}

export default UserList;
// Working on mapping by store name in user lists
// {userList.length === 0 ? <Text>{listText}</Text> : <></>}
//           {/* {userList.map((product) => (
//             <Product product={product} />
//           ))} */}

// function UserList({
//   userList,
//   listTitle,
//   listText,
//   storeNames,
//   favoritesList,
//   setFavoritesList,
//   groceryList,
//   setGroceryList,
//   handleClearClick,
//   clearButtonName,
// }) {
//   return (
//     <Container>
//       <Header>{listTitle} List</Header>
//       <ListContainer>
//         <ProductList>
//           {userList.length === 0 ? (
//             <Text>{listText}</Text>
//           ) : (
//             storeNames
//               .filter((storeName) => {
//                 return userList.some(
//                   (product) => product.storeName === storeName
//                 );
//               })
//               .map((storeName) => {
//                 return (
//                   <UserListStore
//                     userList={userList}
//                     storeName={storeName}
//                     groceryList={groceryList}
//                     setGroceryList={setGroceryList}
//                     favoritesList={favoritesList}
//                     setFavoritesList={setFavoritesList}
//                     key={storeName}
//                   />
//                 );
//               })
//           )}
//         </ProductList>
//       </ListContainer>
//       <UserListButton
//         handleClick={handleClearClick}
//         buttonName={clearButtonName}
//       />
//     </Container>
//   );
// }

// export default UserList;
