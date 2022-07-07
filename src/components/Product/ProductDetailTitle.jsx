import styled from "styled-components";

const Title = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.color.medGray};
`;

function ProductDetailTitle({ title }) {
  return <Title>{title}</Title>;
}

export default ProductDetailTitle;
