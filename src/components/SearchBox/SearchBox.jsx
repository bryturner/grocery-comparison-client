import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MagnifyingGlass } from "phosphor-react";

// TODO: Style on input focus, on focus-> hide icon
const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  border: 0.5px solid black;
  border-radius: 2px;
  align-items: center;
  padding: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.2rem;
  border: none;
`;

function SearchBox({
  setSearchQuery,
  searchQuery,
  products,
  setFilteredProducts,
}) {
  const searchProducts = useCallback(() => {
    const queriedProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (queriedProducts.length > 0) {
      setFilteredProducts(queriedProducts);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  useEffect(() => {
    searchProducts();
  }, [searchProducts, searchQuery]);
  return (
    <Container>
      <label htmlFor="search-box">Find product:</label>
      <Wrapper>
        <SearchInput
          id="search-box"
          type="search"
          placeholder="Search by name"
          defaultValue=""
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <MagnifyingGlass size={16} color="#2d2e2d" weight="bold" /> */}
      </Wrapper>
    </Container>
  );
}

export default React.memo(SearchBox);
