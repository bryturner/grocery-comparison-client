import React, { useState } from "react";
import styled from "styled-components";
import { MagnifyingGlass } from "phosphor-react";
import { useEffect } from "react";

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

function SearchBox({ setSearchQuery, searchQuery }) {
  // 	const searchProducts = useCallback(() => {
  //       const queriedProducts = products.filter((product) => {
  //         return product.dictionaryTitle.toLowerCase().includes(searchQuery);
  //       });
  //       setFilteredProducts(queriedProducts);
  //     }, [searchQuery]);

  // 	 useEffect(() => {
  // searchProducts()
  // 	 } ,[searchQuery])
  return (
    <Container>
      <label htmlFor="search-box">Find product:</label>
      <Wrapper>
        <SearchInput
          id="search-box"
          type="search"
          placeholder="Search by name"
          //  defaultValue={searchQuery}
          defaultValue=""
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MagnifyingGlass size={16} color="#2d2e2d" weight="bold" />
      </Wrapper>
    </Container>
  );
}

export default React.memo(SearchBox);
