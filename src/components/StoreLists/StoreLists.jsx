import React, { useCallback, useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import styled from "styled-components";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SearchBox from "../SearchBox/SearchBox";
import StoreList from "./StoreList";
import { storeTitles } from "../../data";
import ResetCompareButton from "../buttons/ResetCompareButton/ResetCompareButton";
import useCompare from "../../customHooks/useCompare";
import { compareTwoProductTitles } from "../../helpers";

// const StoreList = lazy(() => import("./StoreList"));

// TODO: filteredProducts combines searchQuery & compare
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
  display: flex;
  gap: 1rem;
`;

const StoreLists = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("fruechte-gemuese");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(undefined);

  //   const comparedProducts = useCompare(selectedProduct, products);

  const fetchTestData = () => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.categories[category]);
        setIsLoading(false);
      });
  };

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

  const findBestMatch = useCallback(() => {
    if (selectedProduct === undefined) {
      setFilteredProducts(products);
      return;
    }
    const bestMatchingProducts = [];
    const selectedProductTitle = selectedProduct.title;

    products
      .map((product) => {
        const compareProductTitle = product.title;

        const similarityRating = compareTwoProductTitles(
          selectedProductTitle,
          compareProductTitle
        );
        return { similarityRating: similarityRating, product: product };
      })
      .sort((a, b) => b.similarityRating - a.similarityRating)
      .forEach((product) => {
        if (product.similarityRating > 0.25) {
          bestMatchingProducts.push(product.product);
        }
      });
    setFilteredProducts(bestMatchingProducts);
  }, [products, setFilteredProducts, selectedProduct]);

  useEffect(() => {
    fetchTestData();
  }, [category]);

  //   useEffect(() => {
  //     getProducts();
  //   }, [category]);

  useEffect(() => {
    findBestMatch();
  }, [findBestMatch, selectedProduct]);

  return (
    <Container>
      <InputsContainer>
        <CategoryFilter setCategory={setCategory} setIsLoading={setIsLoading} />
        <SearchBox
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
        <ResetCompareButton
          setFilteredProducts={setFilteredProducts}
          products={products}
          setSelectedProduct={setSelectedProduct}
        />
      </InputsContainer>
      <StoresContainer>
        {storeTitles.map((storeTitle) => (
          <StoreList
            storeTitle={storeTitle}
            products={products}
            filteredProducts={filteredProducts}
            searchQuery={searchQuery}
            isLoading={isLoading}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            key={storeTitle}
          />
        ))}
      </StoresContainer>
    </Container>
  );
};

export default StoreLists;
