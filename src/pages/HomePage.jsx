import styled from "styled-components";
import GroceryList from "../components/Lists/GroceryList";
import CategoryFilter from "../components/Inputs/CategoryFilter";

import SearchBox from "../components/Inputs/SearchBox";
import Sort from "../components/Inputs/Sort";
import Store from "../components/Store/Store";
import FavoritesList from "../components/Lists/FavoritesList";
import { useState } from "react";
import { user, storeNames } from "../assets/data";

const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 4.8rem;
  text-align: center;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  grid-column: 1 / 3;
`;

const ListButton = styled.button`
  cursor: pointer;
`;

function HomePage() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Header>Comparisons</Header>
      <InputsContainer>
        <CategoryFilter setCategory={setCategory} />
        <SearchBox setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <Sort />

        {/* <Filter /> */}
      </InputsContainer>
      <Grid>
        {storeNames.map((storeName) => (
          <Store
            storeName={storeName}
            category={category}
            searchQuery={searchQuery}
            key={storeName}
          />
        ))}

        {/* <GroceryList /> */}
        <FavoritesList />
        <ButtonContainer>
          <ListButton>Save list</ListButton>
          <ListButton>Share list</ListButton>
        </ButtonContainer>
      </Grid>
    </Container>
  );
}

export default HomePage;
