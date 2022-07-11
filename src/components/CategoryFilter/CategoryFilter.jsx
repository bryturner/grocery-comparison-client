import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CategorySelect = styled.select`
  padding: 0.5rem;
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSize.md};
  border: ${(props) => props.theme.border.listInput};
  border-radius: 5px;
  color: ${(props) => props.theme.color.darkGray};

  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    border: ${(props) => props.theme.border.listInputFocus};
    margin: -1px;
  }
`;

const CategoryOption = styled.option`
  font-family: inherit;
`;

function CategoryFilter({ category, setCategory }) {
  return (
    <Container>
      <label htmlFor="category-filter">Category:</label>
      <CategorySelect
        id="category-filter"
        defaultValue={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
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

export default React.memo(CategoryFilter);
