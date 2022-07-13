import styled from "styled-components";

const Title = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.color.detailTitle};
  text-align: left;
`;

function ProductDetailTitle({ title }) {
  return <Title>{title}</Title>;
}

export default ProductDetailTitle;
