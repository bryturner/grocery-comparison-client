import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.p``;

const CategorySelect = styled.select`
  padding: 0.5rem;
`;

const CategoryOption = styled.option``;

function CategoryFilter({ setCategory }) {
  return (
    <Container>
      <Title>Category:</Title>
      <CategorySelect
        defaultValue="all"
        onChange={(e) => setCategory(e.target.value)}
      >
        <CategoryOption value="all">All</CategoryOption>
        <CategoryOption value="fruechte-gemuese">
          Fr&uuml;chte &amp; Gem&uuml;se
        </CategoryOption>
        <CategoryOption value="milchprodukte-eier">
          Milchprodukte &amp; Eier
        </CategoryOption>
        <CategoryOption value="fleisch-fisch">
          Fleisch &amp; Fisch
        </CategoryOption>
        <CategoryOption value="brot-backwaren">
          Brot &amp; Backwaren
        </CategoryOption>
        <CategoryOption value="getraenke">Getr&auml;nke</CategoryOption>
        <CategoryOption value="vorraete">Vorr&auml;te</CategoryOption>
        <CategoryOption value="suesses-snacks">
          S&uuml;sses &amp; Snacks
        </CategoryOption>
        <CategoryOption value="tiefgekuehlte-produkte">
          Tiefgek&uuml;hlte &amp; Produkte
        </CategoryOption>
        <CategoryOption value="fertiggerichte">Fertiggerichte</CategoryOption>
      </CategorySelect>
    </Container>
  );
}

export default CategoryFilter;