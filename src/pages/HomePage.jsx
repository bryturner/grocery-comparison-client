import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import SearchBox from "../components/SearchBox/SearchBox";
import StoreList from "../components/StoreList/StoreList";
import { storeNames, testProducts } from "../data";
import { compareTwoProductTitles } from "../helpers";
import UserList from "../components/UserList/UserList";

const Container = styled.div`
  padding: 2rem 4.8rem;
`;

const Header = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 2rem;
`;

const UserListContainer = styled.div`
  display: flex;
  gap: 1rem;
  grid-column: 1 / -1;
`;

function HomePage() {
  const [products, setProducts] = useState(testProducts);
  const [category, setCategory] = useState("fruechte-gemuese");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const getProducts = async () => {
    try {
      const productResponse = await axios.get(
        `http://localhost:8000/product?category=${category}`
      );
      setProducts(productResponse.data);
    } catch (err) {
      console.error(err);
      return [];
      // use test products for app functionality if fetch error
      // display message: Products being displayed are not real....
    }
  };

  const getGroceryList = () => {
    const groceryListData = JSON.parse(localStorage.getItem("groceryList"));
    if (!groceryListData) return;
    setGroceryList(groceryListData);
  };

  const getFavoritesList = () => {
    const favoritesListData = JSON.parse(localStorage.getItem("favoritesList"));
    if (!favoritesListData) return;
    setFavoritesList(favoritesListData);
  };

  const handleClearGroceryClick = () => {
    localStorage.removeItem("groceryList");
    setGroceryList([]);
  };

  const handleClearFavoritesClick = () => {
    localStorage.removeItem("favoritesList");
    setFavoritesList([]);
  };

  const filterProducts = () => {
    const filteredProds = products.filter((product) => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredProducts(filteredProds);
  };

  const findBestMatch = () => {
    if (selectedProduct === undefined) {
      setProducts(products);
      return;
    }
    let bestMatchingProducts = [];
    const selectedTitle = selectedProduct.title;
    products
      .map((product) => {
        const similarityRating = compareTwoProductTitles(
          selectedTitle,
          product.title
        );
        return { similarityRating: similarityRating, product: product };
      })
      .sort((a, b) => b.similarityRating - a.similarityRating)
      .forEach((product) => {
        if (product.similarityRating > 0.25) {
          bestMatchingProducts.push(product.product);
        }
      });
    setProducts(bestMatchingProducts);
  };

  useEffect(() => {
    category && filterProducts();
  }, [category, products, searchQuery]);

  useEffect(() => {
    findBestMatch();
  }, [selectedProduct]);

  useEffect(() => {
    getGroceryList();
    getFavoritesList();
  }, []);

  //   useEffect(() => {
  //     getProducts();
  //   }, [category]);

  return (
    <Container>
      <Header>Compare Grocery Products</Header>
      <InputsContainer>
        <CategoryFilter setCategory={setCategory} />
        <SearchBox setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      </InputsContainer>
      <Grid>
        {storeNames.map((storeName) => (
          <StoreList
            storeName={storeName}
            category={category}
            filteredProducts={filteredProducts}
            products={products}
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
            setGroceryList={setGroceryList}
            groceryList={groceryList}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            key={storeName}
          />
        ))}
        <UserListContainer>
          <UserList
            userList={groceryList}
            listTitle="Grocery"
            listText="Click the plus to add to grocery list"
            storeNames={storeNames}
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
            groceryList={groceryList}
            setGroceryList={setGroceryList}
            handleClearClick={handleClearGroceryClick}
            clearButtonName="Clear grocery list"
          />
          <UserList
            userList={favoritesList}
            listTitle="Favorites"
            listText="Click the heart to add to favorites"
            storeNames={storeNames}
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
            groceryList={groceryList}
            setGroceryList={setGroceryList}
            handleClearClick={handleClearFavoritesClick}
            clearButtonName="Clear favorites list"
          />
        </UserListContainer>
      </Grid>
    </Container>
  );
}

export default HomePage;
