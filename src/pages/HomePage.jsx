import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import GroceryList from "../components/GroceryList/GroceryList";
import SearchBox from "../components/SearchBox/SearchBox";
import StoreList from "../components/StoreList/StoreList";
import FavoritesList from "../components/FavoritesList/FavoritesList";
import { storeNames, testProducts, testUser1 } from "../data";
import { compareTwoProductTitles } from "../helpers";
import ListButton from "../components/buttons/ListButton/ListButton";

const Container = styled.div`
  padding: 2rem;
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  grid-column: 1 / 3;
`;

function HomePage() {
  const [products, setProducts] = useState(testProducts);
  const [category, setCategory] = useState("fruechte-gemuese");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [groceryList, setGroceryList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  //  const getProducts = async () => {
  //    try {
  //      const productResponse = await axios.get("http://localhost:8000/product");
  //      setProducts(productResponse.data);
  //    } catch (err) {
  //      console.error(err);
  //      return [];
  //    }
  //  };

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

  const handleClearFavoritesListClick = () => {
    localStorage.removeItem("favoritesList");
    setFavoritesList([]);
  };

  const filterProducts = () => {
    let filteredProds = [];
    for (let product of products) {
      if (
        product.categories.includes(category) &&
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        filteredProds.push(product);
      }
    }
    setFilteredProducts(filteredProds);
  };

  const findBestMatch = () => {
    if (selectedProduct === undefined) {
      setProducts(testProducts);
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
  //     console.log(groceryList);
  //   }, []);

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
        <GroceryList
          storeNames={storeNames}
          favoritesList={favoritesList}
          setFavoritesList={setFavoritesList}
          groceryList={groceryList}
          setGroceryList={setGroceryList}
        />
        <FavoritesList
          favoritesList={favoritesList}
          setFavoritesList={setFavoritesList}
          groceryList={groceryList}
          setGroceryList={setGroceryList}
        />
        <ButtonContainer>
          <ListButton
            handleClick={handleClearGroceryClick}
            buttonName="Clear Grocery List"
          />
          <ListButton
            handleClick={handleClearFavoritesListClick}
            buttonName="Clear Favorites List"
          />
        </ButtonContainer>
      </Grid>
    </Container>
  );
}

export default HomePage;
