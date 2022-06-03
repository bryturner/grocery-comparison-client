import styled from "styled-components";
import Store from "../components/Store/Store";

const Container = styled.div`
  padding: 2rem;
`;

const Header = styled.h1`
  font-size: 4.8rem;
  text-align: center;
  margin-bottom: 2rem;
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
