import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.p``;

const SortSelect = styled.select`
  padding: 0.5rem;
`;

const SortOption = styled.option``;

function Sort() {
  return (
    <Container>
      <Title>Sort by:</Title>
      <SortSelect>
        <SortOption>Price</SortOption>
        <SortOption>Name</SortOption>
        <SortOption>Size</SortOption>
      </SortSelect>
    </Container>
  );
}

export default Sort;
