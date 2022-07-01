import styled from "styled-components";

export const Button = styled.button`
  /* border: ${(props) => (props.selectedBorder ? "1px solid red" : "none")}; */
  display: ${(props) => (props.onUserStoreList ? "none" : "block")};
`;

function SelectProductButton({
  product,
  selectedProduct,
  handleProductClicked,
  onUserStoreList,
}) {
  return (
    <Button
      onUserStoreList={onUserStoreList}
      aria-label="select-for-comparison"
      selectedBorder={selectedProduct && selectedProduct._id === product._id}
      onClick={() => {
        handleProductClicked();
      }}
    >
      Compare
    </Button>
  );
}

export default SelectProductButton;
