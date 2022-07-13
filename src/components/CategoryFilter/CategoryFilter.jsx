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

function CategoryFilter({ category, setCategory, errorFetchProducts }) {
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
        <CategoryOption disabled={errorFetchProducts} value="brot-backwaren">
          Brot &amp; Backwaren
        </CategoryOption>
        <CategoryOption disabled={errorFetchProducts} value="getraenke">
          Getr&auml;nke
        </CategoryOption>
        <CategoryOption disabled={errorFetchProducts} value="vorraete">
          Vorr&auml;te
        </CategoryOption>
        <CategoryOption disabled={errorFetchProducts} value="suesses-snacks">
          S&uuml;sses &amp; Snacks
        </CategoryOption>
        <CategoryOption
          disabled={errorFetchProducts}
          value="tiefgekuehlte-produkte"
        >
          Tiefgek&uuml;hlte &amp; Produkte
        </CategoryOption>
        <CategoryOption disabled={errorFetchProducts} value="fertiggerichte">
          Fertiggerichte
        </CategoryOption>
      </CategorySelect>
    </Container>
  );
}

export default React.memo(CategoryFilter);
