import styled from "styled-components";

export const Button = styled.button`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: none;
  border: ${(props) => (props.selectedBorder ? "1px solid red" : "none")};
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

function SelectProductButton({
  product,
  selectedProduct,
  handleProductClicked,
}) {
  return (
    <Button
      aria-label="select-for-comparison"
      selectedBorder={selectedProduct && selectedProduct._id === product._id}
      onClick={() => {
        handleProductClicked();
      }}
    />
  );
}

export default SelectProductButton;
