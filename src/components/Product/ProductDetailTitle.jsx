import styled from "styled-components";

const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.color.detailTitle};
`;

function ProductDetailTitle({ title }) {
  return <Title>{title}</Title>;
}

export default ProductDetailTitle;
