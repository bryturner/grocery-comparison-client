import styled from "styled-components";
import { BORDER } from "../../constants/styles";
import GroceryListItem from "./GroceryListItem";

const Container = styled.div`
  grid-column: 1 / 3;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
`;
const GroceryListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${[BORDER.MAIN]}
`;

function GroceryList() {
  return (
    <Container>
      <Title>My List</Title>
      <GroceryListContainer>
        <GroceryListItem storeName="Coop" />
        <GroceryListItem storeName="Migros" />
        <GroceryListItem storeName="Denner" />
        <GroceryListItem storeName="Aldi" />
      </GroceryListContainer>
    </Container>
  );
}

export default GroceryList;
