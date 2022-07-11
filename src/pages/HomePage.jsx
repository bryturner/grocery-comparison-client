import styled from "styled-components";
import Header from "../components/Headings/Header";
import StoreLists from "../components/StoreLists/StoreLists";
import UserLists from "../components/UserLists/UserLists";
import { UserListsContextProvider } from "../contexts/UserListsContext";
import allGroceries from "../images/allGroceries.jpg";

const storeTitles = ["Coop", "Migros"];

const Container = styled.div`
  padding-top: 3.2rem;
  position: relative;
`;

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${allGroceries});
  background-size: cover;
  background-position: left;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -5;
`;

// Make header component separate from storelists
const HomePage = () => {
  return (
    <Container>
      <Header />
      <UserListsContextProvider>
        <StoreLists />
        <UserLists />
      </UserListsContextProvider>
      <BackgroundImage />
    </Container>
  );
};

export default HomePage;
