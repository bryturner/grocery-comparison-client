import styled from "styled-components";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SearchBox from "../SearchBox/SearchBox";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

function StoreListInputs({ setCategory, setSearchQuery }) {
  return (
    <Container>
      <CategoryFilter setCategory={setCategory} />
      <SearchBox setSearchQuery={setSearchQuery} />
    </Container>
  );
}

export default StoreListInputs;
