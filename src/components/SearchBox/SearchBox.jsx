import { Search } from "@mui/icons-material";
import styled from "styled-components";
import InputLabel from "../Labels/InputLabel";

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

function SearchBox({ setSearchQuery }) {
  return (
    <Container>
      <InputLabel htmlFor="search-box" title="Find product:" />
      <Wrapper>
        <SearchInput
          id="search-box"
          type="search"
          placeholder="Search by name"
          defaultValue=""
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <Search style={{ color: "black", fontSize: 16 }} />
      </Wrapper>
    </Container>
  );
}

export default SearchBox;
