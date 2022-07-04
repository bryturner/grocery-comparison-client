import React from "react";
import styled from "styled-components";
import StoreLists from "../components/StoreLists/StoreLists";
import UserLists from "../components/UserLists/UserLists";

const Container = styled.div`
  padding: 2rem 4.8rem;
  position: relative;
`;

const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSize.hd1};
  text-align: center;
`;

function HomePage2() {
  return (
    <Container>
      <Header>Compare Grocery Products</Header>
      <StoreLists />
      <UserLists />
    </Container>
  );
}

export default HomePage2;
