import styled from "styled-components";

const Divider = styled.div`
  border-bottom: 1px solid
    ${(props) =>
      props.listType === "userList"
        ? props.theme.color.darkBlueWithOp
        : props.listType === "storeList"
        ? props.theme.color.darkOrangeWithOp
        : "#333"};
  width: 100%;
`;

function ProductDivider({ listType }) {
  return <Divider listType={listType} />;
}

export default ProductDivider;
