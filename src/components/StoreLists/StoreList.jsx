import styled from "styled-components";
import { LIST_TYPE } from "../../constants/GlobalVariables";
import Loading from "../Loading/Loading";
import Product from "../Product/Product";
import { lazy, Suspense } from "react";
import ListHeading from "../Headings/ListHeading";

// const Product = lazy(() => import("../Product/Product"));

const Container = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.color.lightOrange};
  border-radius: 8px;
  overflow: hidden;
`;

const ListContainer = styled.div`
  height: 30rem;
  overflow-y: ${(props) => (props.loading ? "hidden" : "scroll")};
  ::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  border: 1px solid ${(props) => props.theme.color.darkOrangeWithOp};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  opacity: ${(props) => (props.loading ? "1" : "0")};
  visibility: ${(props) => (props.loading ? "visible" : "hidden")};
`;

const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  filter: ${(props) => (props.loading ? "blur(3px)" : "none")};
  transition: all 0.1s linear;
`;

const Text = styled.p`
  text-align: center;
`;

function StoreList({ storeTitle, products, dispatchFilter, loading }) {
  return (
    <Container storeTitle={storeTitle}>
      <ListHeading heading={storeTitle} listType={LIST_TYPE.STORE} />
      <ListContainer>
        <LoadingWrapper loading={loading}>
          <Loading type="bars" color="#999" />
        </LoadingWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductList loading={loading}>
            {products.length === 0 ? (
              <Text>No products found in this store</Text>
            ) : (
              products
                .filter((product) => product.storeTitle === storeTitle)
                .map((product) => (
                  <Product
                    product={product}
                    dispatchFilter={dispatchFilter}
                    listType={LIST_TYPE.STORE}
                    key={product._id}
                  />
                ))
            )}
          </ProductList>
        </Suspense>
      </ListContainer>
    </Container>
  );
}

export default StoreList;
