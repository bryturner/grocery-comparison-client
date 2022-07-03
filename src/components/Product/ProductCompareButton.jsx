import styled from "styled-components";
import { Button } from "../../constants/styles";

export const CompareButton = styled(Button)`
  background-color: ${(props) => (props.selectedBorder ? "green" : "white")};
  display: ${(props) => (props.onUserStoreList ? "none" : "block")};
`;

function ProductCompareButton({
  product,
  selectedProduct,
  handleProductClicked,
  onUserStoreList,
}) {
  return (
    <CompareButton
      onUserStoreList={onUserStoreList}
      aria-label="select-for-comparison"
      selectedBorder={selectedProduct && selectedProduct._id === product._id}
      onClick={() => {
        handleProductClicked();
      }}
    >
      Compare
    </CompareButton>
  );
}

export default ProductCompareButton;
