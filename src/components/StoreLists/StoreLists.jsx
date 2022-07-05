import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SearchBox from "../SearchBox/SearchBox";
import StoreList from "./StoreList";
import { storeTitles, testProducts } from "../../data";

const Container = styled.div`
  margin-bottom: 2rem;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const StoresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
`;

// get products, filter, search, reset compare, compare
const StoreLists = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("fruechte-gemuese");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTestData = () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.categories[category]);
      });
  };

  const handleClick = () => {
    console.log(products);
    //  handleClick()
  };

  useEffect(() => {
    fetchTestData();
  }, [category]);

  //   useEffect(() => {
  //     searchProducts();
  //   }, [searchProducts]);

  return (
    <Container>
      <InputsContainer>
        <CategoryFilter setCategory={setCategory} />
        <SearchBox setSearchQuery={setSearchQuery} />
        <button onClick={() => handleClick()}>Test</button>
      </InputsContainer>
      <StoresContainer>
        {storeTitles.map((storeTitle) => (
          <StoreList
            storeTitle={storeTitle}
            products={products}
            key={storeTitle}
          />
        ))}
      </StoresContainer>
    </Container>
  );
};

export default StoreLists;
