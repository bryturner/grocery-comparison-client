import styled from "styled-components";
// import { useState, useEffect, lazy, Suspense } from "react";
import StoreLists from "../components/StoreLists/StoreLists";
import UserLists from "../components/UserLists/UserLists";
import { UserListsContextProvider } from "../contexts/UserListsContext";

const storeTitles = ["Coop", "Migros"];

const Container = styled.div`
  padding: 2rem 4.8rem;
  position: relative;
`;

const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSize.hd1};
  text-align: center;
`;

const HomePage = () => {
  return (
    <Container>
      <Header>Compare Grocery Products</Header>
      <UserListsContextProvider>
        <StoreLists />
        <UserLists />
      </UserListsContextProvider>
    </Container>
  );
};

export default HomePage;
