import styled from "styled-components";

export const CompareButton = styled.button`
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  border: none;
  transition: all 0.1s linear;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.medBlue};
  display: ${(props) => (props.listType === "userList" ? "none" : "block")};

  &:hover {
    background-color: ${(props) => props.theme.color.medDarkBlue};
  }
`;

function ProductCompareButton({ product, dispatchFilter, listType }) {
  return (
    <CompareButton
      listType={listType}
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
