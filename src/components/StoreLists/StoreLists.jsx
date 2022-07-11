import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SearchBox from "../SearchBox/SearchBox";
import StoreList from "./StoreList";
import { storeTitles } from "../../data";
import ResetCompareButton from "../buttons/ResetCompareButton/ResetCompareButton";

import { useFilterReducer } from "../../customHooks/useFilterReducer";
import { useFetchProducts } from "../../customHooks/useAxiosFetch";

// const StoreList = lazy(() => import("./StoreList"));

const Container = styled.div`
  /* background-color: ${(props) => props.theme.color.storeListsBackground}; */
  background-color: white;
  padding: 2rem 4.8rem 4rem 4.8rem;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const StoresContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StoreLists = () => {
  const [products, setProducts] = useState([]);
  //   const [category, setCategory] = useState("suesses-snacks");
  const [category, setCategory] = useState("fruechte-gemuese");
  const [loading, setLoading] = useState(false);
  const [state, dispatchFilter] = useFilterReducer({ products: products });

  const fetchTestData = () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.categories[category]);
        //   setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchTestData();
  }, [category]);

  //   const getProducts = async () => {
  //     setLoading(true);
  //     try {
  //       const productResponse = await axios.get(
  //         `http://localhost:8000/product?category=${category}`
  //       );
  //       setProducts(productResponse.data);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     getProducts();
  //   }, [category]);

  useEffect(() => {
    dispatchFilter({ type: "fetchProducts", payload: { products: products } });
  }, [products, dispatchFilter]);

  return (
    <Container>
      <InputsContainer>
        <CategoryFilter category={category} setCategory={setCategory} />
        <SearchBox state={state} dispatchFilter={dispatchFilter} />
        <ResetCompareButton dispatchFilter={dispatchFilter} />
      </InputsContainer>
      <StoresContainer>
        {storeTitles.map((storeTitle) => (
          <StoreList
            storeTitle={storeTitle}
            products={state.products}
            dispatchFilter={dispatchFilter}
            loading={loading}
            key={storeTitle}
          />
        ))}
      </StoresContainer>
    </Container>
  );
};

export default StoreLists;
