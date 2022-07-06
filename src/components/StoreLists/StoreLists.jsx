import React, { useCallback, useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import styled from "styled-components";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SearchBox from "../SearchBox/SearchBox";
// import StoreList from "./StoreList";
import { storeTitles } from "../../data";

const StoreList = lazy(() => import("./StoreList"));

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
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
`;

// get products, filter, search, reset compare, compare
const StoreLists = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("fruechte-gemuese");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //   const fetchTestData = () => {
  //     fetch("data.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setProducts(data.categories[category]);
  //       });
  //   };

  const getProducts = async () => {
    try {
      const productResponse = await axios.get(
        `http://localhost:8000/product?category=${category}`
      );
      setProducts(productResponse.data);
    } catch (err) {
      console.error(err);
      setProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    console.log(products);
    //  handleClick()
  };

  //   useEffect(() => {
  //     fetchTestData();
  //   }, [category]);

  useEffect(() => {
    getProducts();
  }, [category]);

  //   useEffect(() => {
  //     searchProducts();
  //   }, [searchProducts]);

  return (
    <Container>
      <InputsContainer>
        <CategoryFilter setCategory={setCategory} setIsLoading={setIsLoading} />
        <SearchBox setSearchQuery={setSearchQuery} />
        <button onClick={() => handleClick()}>Test</button>
      </InputsContainer>
      <StoresContainer>
        {storeTitles.map((storeTitle) => (
          <StoreList
            storeTitle={storeTitle}
            products={products}
            isLoading={isLoading}
            key={storeTitle}
          />
        ))}
      </StoresContainer>
    </Container>
  );
};

export default StoreLists;
