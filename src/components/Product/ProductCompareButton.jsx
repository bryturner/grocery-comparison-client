import styled from "styled-components";

export const CompareButton = styled.button`
  background-color: none;
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  transition: all 0.1s linear;
  color: ${(props) => props.theme.color.white};
  /* border: ${(props) =>
    props.selectedBorder ? "1px solid purple" : "1px solid black"}; */
  border: ${(props) => props.theme.buttonBorder.primary};
  background-color: ${(props) => props.theme.buttonColor.primary};
  display: ${(props) => (props.onUserStoreList ? "none" : "block")};

  &:hover {
    background-color: #56a0ee;
  }

  &:active {
    background-color: green;
  }
`;

function ProductCompareButton({ product, dispatchFilter, onUserStoreList }) {
  return (
    <CompareButton
      onUserStoreList={onUserStoreList}
      aria-label="select-for-comparison"
      onClick={() => {
        dispatchFilter({
          type: "compare",
          payload: { selectedProduct: product },
        });
      }}
    >
      Compare
    </CompareButton>
  );
}

export default ProductCompareButton;
