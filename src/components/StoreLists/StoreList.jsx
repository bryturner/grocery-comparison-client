import styled from "styled-components";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";

const Container = styled.div``;

const Header = styled.h2`
  font-size: ${(props) => props.theme.fontSize.hd2};
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ListContainer = styled.div`
  border: 2px solid ${(props) => props.theme.color.medGray};
  border-radius: 8px;
  height: 25rem;
  overflow-y: ${(props) => (props.isLoading ? "hidden" : "scroll")};
  ::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  opacity: ${(props) => (props.isLoading ? "1" : "0")};
  visibility: ${(props) => (props.isLoading ? "visible" : "hidden")};
`;

const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  filter: ${(props) => (props.isLoading ? "blur(3px)" : "none")};
  transition: all 0.1s linear;
`;

function StoreList({ storeTitle, products }) {
  return (
    <Container>
      <Header>{storeTitle}</Header>
      <ListContainer>
        <ProductList>
          {products
            .filter((product) => product.storeTitle === storeTitle)
            .map((product) => (
              <Product product={product} key={product._id} />
            ))}
        </ProductList>
      </ListContainer>
    </Container>
  );
}

export default StoreList;
