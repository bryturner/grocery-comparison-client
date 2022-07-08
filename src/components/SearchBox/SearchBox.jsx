import React from "react";
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

function SearchBox({ state, dispatchFilter }) {
  return (
    <Container>
      <label htmlFor="search-box">Find product:</label>
      <Wrapper>
        <SearchInput
          id="search-box"
          type="search"
          placeholder="Search by name"
          value={state.query}
          onChange={(e) =>
            dispatchFilter({
              type: "query",
              payload: { searchQuery: e.target.value },
            })
          }
        />
        {/* <MagnifyingGlass size={16} color="#2d2e2d" weight="bold" /> */}
      </Wrapper>
    </Container>
  );
}

export default React.memo(SearchBox);
