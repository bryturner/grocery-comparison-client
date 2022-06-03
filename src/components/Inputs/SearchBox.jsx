import { Search } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  border: 0.5px solid gray;
  border-radius: 8px;
  align-items: center;
  padding: 0.5rem;
`;

const Title = styled.p``;

const SearchInput = styled.input`
  padding: 0.2rem;
`;

function SearchBox() {
  return (
    <Container>
      <Title>Find product:</Title>
      <Wrapper>
        <SearchInput placeholder="Search by name" />
        <Search style={{ color: "black", fontSize: 16 }} />
      </Wrapper>
    </Container>
  );
}

export default SearchBox;
