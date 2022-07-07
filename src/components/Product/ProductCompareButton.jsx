import styled from "styled-components";

export const CompareButton = styled.button`
  background-color: none;
  cursor: pointer;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  transition: all 0.1s linear;
  color: ${(props) => props.theme.color.white};
  border: ${(props) =>
    props.selectedBorder ? "1px solid purple" : "1px solid black"};
  background-color: ${(props) =>
    props.selectedBorder ? "green" : props.theme.buttonColor.primary};
  display: ${(props) => (props.onUserStoreList ? "none" : "block")};

  &:hover {
    background-color: #56a0ee;
  }

  &:active {
    background-color: green;
  }
`;

function ProductCompareButton({
  product,
  selectedProduct,
  setSelectedProduct,
  onUserStoreList,
}) {
  const handleCompareClick = () => {
    if (selectedProduct === product) {
      setSelectedProduct(undefined);
    } else {
      setSelectedProduct(product);
    }
  };
  return (
    <CompareButton
      onUserStoreList={onUserStoreList}
      aria-label="select-for-comparison"
      selectedBorder={selectedProduct && selectedProduct._id === product._id}
      onClick={() => {
        handleCompareClick();
      }}
    >
      Compare
    </CompareButton>
  );
}

export default ProductCompareButton;
