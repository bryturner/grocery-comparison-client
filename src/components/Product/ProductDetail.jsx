import styled from "styled-components";
import ProductDetailTitle from "./ProductDetailTitle";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailText = styled.span`
  flex: 1;
  text-align: left;
  color: ${(props) => props.theme.color.darkGray};
  font-size: ${(props) => props.theme.fontSize.md};
`;

function ProductDetail({ detailText, detailTitle, detailType }) {
  return (
    <Wrapper>
      <ProductDetailTitle title={detailTitle} />
      <DetailText detailType={detailType}>{detailText}</DetailText>
    </Wrapper>
  );
}

export default ProductDetail;

{
  /* <PriceWrapper>
              <ProductTextTitle title="Total" />
              <Price data-testid="product-price">
                {product.price.toFixed(2)}
              </Price>
            </PriceWrapper> */
}
