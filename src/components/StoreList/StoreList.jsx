import styled from "styled-components";
import { useEffect, useState } from "react";

import { BORDER, LIST } from "../../constants/styles";
import Product from "../Product/Product";

const Container = styled.div`
  padding: 1rem 0;
`;

const Header = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 1.2rem;
`;

const ProductList = styled.ul`
  ${[BORDER.MAIN]}
  ${[LIST.PRODUCT]}
  height: 20rem;
`;

function StoreList({
  storeName,
  category,
  searchQuery,
  products,
  favorites,
  setFavorites,
  groceryList,
  setGroceryList,
}) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProducts = () => {
    let filteredProds = [];
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (
        product.productCategory.includes(category) &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        filteredProds.push(product);
      }
    }
    setFilteredProducts(filteredProds);
  };

  useEffect(() => {
    category && filterProducts();
  }, [category, products, searchQuery]);
  return (
    <Container>
      <Header>{storeName}</Header>
      <ProductList>
        {category
          ? filteredProducts
              .filter((product) => product.storeName === storeName)
              .map((product, i) => (
                <Product
                  product={product}
                  key={i}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  groceryList={groceryList}
                  setGroceryList={setGroceryList}
                />
              ))
          : products
              .filter((product) => product.storeName === storeName)
              .map((product, i) => (
                <Product
                  product={product}
                  key={i}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  groceryList={groceryList}
                  setGroceryList={setGroceryList}
                />
              ))}
      </ProductList>
    </Container>
  );
}

export default StoreList;
