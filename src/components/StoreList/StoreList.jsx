import styled from "styled-components";
import { ListWithBorder } from "../../constants/styles";
import Product from "../Product/Product";

const Container = styled.div``;

const Header = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ProductList = styled(ListWithBorder)``;

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
  return (
    <Container>
      <Header>{storeName}</Header>
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
    </Container>
  );
}

export default StoreList;
