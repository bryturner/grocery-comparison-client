import { Search } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";

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
  return (
    <Container>
      <label htmlFor="search-box">Find product:</label>
      <Wrapper>
        <SearchInput
          id="search-box"
          type="search"
          placeholder="Search by name"
          defaultValue={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search style={{ color: "black", fontSize: 16 }} />
      </Wrapper>
    </Container>
  );
}

export default SearchBox;
