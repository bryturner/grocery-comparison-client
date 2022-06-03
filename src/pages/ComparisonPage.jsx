import styled from "styled-components";
import Filter from "../components/Inputs/Filter";
import SearchBox from "../components/Inputs/SearchBox";
import Sort from "../components/Inputs/Sort";
import Store from "../components/Store/Store";

const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 4.8rem;
  text-align: center;
`;

const InputsContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const StoresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
`;

function ComparisonPage() {
  return (
    <Container>
      <Header>Comparisons</Header>
      <InputsContainer>
        <SearchBox />
        <Sort />
        <Filter />
      </InputsContainer>
      <StoresContainer>
        <Store storeName="Coop" />
        <Store storeName="Migros" />
        <Store storeName="Denner" />
        <Store storeName="Aldi" />
      </StoresContainer>
    </Container>
  );
}

export default ComparisonPage;
