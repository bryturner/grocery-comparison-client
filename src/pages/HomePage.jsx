import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Headings/Header";
import StoreLists from "../components/StoreLists/StoreLists";
import UserLists from "../components/UserLists/UserLists";
import { UserListsContextProvider } from "../contexts/UserListsContext";
import allGroceries from "../images/allGroceries.jpg";

const Container = styled.div`
  /* padding: 3.2rem 0; */
  position: relative;
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

const HomePage = () => {
  return (
    <Container>
      <Header />
      <UserListsContextProvider>
        <StoreLists />
        <UserLists />
      </UserListsContextProvider>
      <Footer />
      <BackgroundImage />
    </Container>
  );
};

export default HomePage;
