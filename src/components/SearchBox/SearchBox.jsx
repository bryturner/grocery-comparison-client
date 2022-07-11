import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
  min-width: 10rem;
`;

const SearchInput = styled.input`
  font-family: inherit;
  width: 100%;
  height: 32.5px;
  padding: 0.5rem 3rem 0.5rem 1rem;
  font-size: ${(props) => props.theme.fontSize.md};
  border: ${(props) => props.theme.border.listInput};
  border-radius: 5px;
  outline: 0;
  background-color: white;
  overflow: hidden;
  ::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
  transition: all 0.1s linear;

  &:hover,
  &:focus {
    border: ${(props) => props.theme.border.listInputFocus};
    margin: -1px;
  }
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
          maxLength="20"
          value={state.searchQuery}
          onChange={(e) =>
            dispatchFilter({
              type: "query",
              payload: { searchQuery: e.target.value },
            })
          }
        />
      </Wrapper>
    </Container>
  );
}

export default React.memo(SearchBox);
