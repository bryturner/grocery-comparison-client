import { useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ListWithBorder } from "../../constants/styles";
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
  padding: 1rem 0;
  height: 25rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  opacity: 0.7;
`;

const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function StoreList({
  storeName,
  category,
  filteredProducts,
  products,
  favoritesList,
  setFavoritesList,
  groceryList,
  setGroceryList,
  selectedProduct,
  setSelectedProduct,
  isLoading,
}) {
  // !!!! Use Ref
  //   const scrollToTop = () => {
  //     const storeLists = document.querySelectorAll(".list-container");
  //     if (isLoading) {
  //       storeLists.scrollTo(0, 0);
  //     }
  //   };
  //   const storeListRef = useRef();

  //   useEffect(() => {
  //     storeListRef.current.scrollTo(0, 0);
  //   }, [isLoading]);

  return (
    <Container>
      <Header>{storeName}</Header>
      <ListContainer>
        {isLoading ? (
          <LoadingWrapper>
            <Loading type="bars" color="#333" height="64px" width="64px" />
          </LoadingWrapper>
        ) : (
          <ProductList>
            {category
              ? filteredProducts
                  .filter((product) => product.storeName === storeName)
                  .map((product) => (
                    <Product
                      product={product}
                      favoritesList={favoritesList}
                      setFavoritesList={setFavoritesList}
                      groceryList={groceryList}
                      setGroceryList={setGroceryList}
                      selectedProduct={selectedProduct}
                      setSelectedProduct={setSelectedProduct}
                      key={product._id}
                    />
                  ))
              : products
                  .filter((product) => product.storeName === storeName)
                  .map((product) => (
                    <Product
                      product={product}
                      favoritesList={favoritesList}
                      setFavoritesList={setFavoritesList}
                      groceryList={groceryList}
                      setGroceryList={setGroceryList}
                      selectedProduct={selectedProduct}
                      setSelectedProduct={setSelectedProduct}
                      key={product._id}
                    />
                  ))}
          </ProductList>
        )}
      </ListContainer>
    </Container>
  );
}

export default StoreList;
