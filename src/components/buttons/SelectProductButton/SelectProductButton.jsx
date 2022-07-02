import styled from "styled-components";
import { Button } from "../../../constants/styles";

export const CompareButton = styled(Button)`
  /* border: ${(props) => (props.selectedBorder ? "1px solid red" : "none")}; */
  background-color: ${(props) => (props.selectedBorder ? "green" : "white")};
  display: ${(props) => (props.onUserStoreList ? "none" : "block")};
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
`;

function SelectProductButton({
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

export default SelectProductButton;
