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
  height: 40rem;
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

function StoreList({
  storeTitle,
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
  //     storeLists.forEach((storeList) => {
  //       if (isLoading) {
  //         storeList.scrollTo({ top: 0, behavior: "smooth" });
  //       }
  //     });
  //   };
  //   //   const storeListRef = useRef();

  //   useEffect(() => {
  //     scrollToTop();
  //   }, [isLoading]);

  return (
    <Container>
      <Header>{storeTitle}</Header>
      <ListContainer isLoading={isLoading} className="list-container">
        {/* {isLoading ? (
          <LoadingWrapper>
            <Loading type="bars" color="#555" height="64px" width="64px" />
          </LoadingWrapper>
        ) : (
          <></>
        )} */}
        <LoadingWrapper isLoading={isLoading}>
          <Loading type="bars" color="#555" height="64px" width="64px" />
        </LoadingWrapper>
        <ProductList isLoading={isLoading}>
          {category
            ? filteredProducts
                .filter((product) => product.storeTitle === storeTitle)
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
                .filter((product) => product.storeTitle === storeTitle)
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
      </ListContainer>
    </Container>
  );
}

export default StoreList;
