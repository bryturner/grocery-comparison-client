import styled from "styled-components";
import { useState } from "react";

import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import GroceryList from "../components/GroceryList/GroceryList";
import SearchBox from "../components/SearchBox/SearchBox";
import Sort from "../components/Sort/Sort";
import StoreList from "../components/StoreList/StoreList";
import FavoritesList from "../components/FavoritesList/FavoritesList";
import { user, storeNames, allProducts } from "../data";
import { userItemsOnLists } from "../__mocks__/user";

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
  const [products, setProducts] = useState(allProducts);
  const [favorites, setFavorites] = useState(user.favoritesList);
  const [groceryList, setGroceryList] = useState(user.groceryList);
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container>
      <Header>Comparisons</Header>
      <InputsContainer>
        <CategoryFilter setCategory={setCategory} />
        <SearchBox setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <Sort />
      </InputsContainer>
      <Grid>
        {storeNames.map((storeName) => (
          <StoreList
            storeName={storeName}
            category={category}
            searchQuery={searchQuery}
            products={products}
            favorites={favorites}
            setFavorites={setFavorites}
            groceryList={groceryList}
            setGroceryList={setGroceryList}
            key={storeName}
          />
        ))}

        <GroceryList favorites={favorites} groceryList={groceryList} />
        <FavoritesList favorites={favorites} groceryList={groceryList} />
        <ButtonContainer>
          <ListButton>Save list</ListButton>
          <ListButton>Share list</ListButton>
        </ButtonContainer>
      </Grid>
    </Container>
  );
}

export default HomePage;
