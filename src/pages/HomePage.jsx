import styled from "styled-components";
import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";

import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import SearchBox from "../components/SearchBox/SearchBox";
import StoreList from "../components/StoreLists/StoreList";
import { testProducts } from "../data";
import { compareTwoProductTitles } from "../helpers";
import UserList from "../components/UserList/UserList";
import ResetCompareButton from "../components/buttons/ResetCompareButton/ResetCompareButton";
// const StoreList = lazy(() => import("../components/StoreList/StoreList"));
// const UserList = lazy(() => import("../components/UserList/UserList"));

const storeTitles = ["Coop", "Migros"];

const Container = styled.div`
  padding: 2rem 4.8rem;
  position: relative;
`;

const Header = styled.h1`
  font-size: ${(props) => props.theme.fontSize.hd1};
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
  grid-template-columns: repeat(2, 1fr);
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
  const [allProdsInCategory, setAllProdsInCategory] = useState(testProducts);
  const [category, setCategory] = useState("fruechte-gemuese");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(undefined);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [groceryList, setGroceryList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = async () => {
    try {
      const productResponse = await axios.get(
        `http://localhost:8000/product?category=${category}`
      );
      console.log(productResponse.data);
      setProducts(productResponse.data);
      // Store all products on initial db call for reset compare click
      setAllProdsInCategory(productResponse.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      return [];
      // setProducts(testProducts);
      // setAllProdsInCategory(testProducts);
      // use test products for app functionality if fetch error
      // display message: Products being displayed are not real....
    }
  };

  const loadTestData = () => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts({ data }));
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

  //   Handle button clicks
  const handleClearGroceryClick = () => {
    localStorage.removeItem("groceryList");
    setGroceryList([]);
  };

  const handleClearFavoritesClick = () => {
    localStorage.removeItem("favoritesList");
    setFavoritesList([]);
  };

  const handleResetCompareClick = () => {
    setSelectedProduct(undefined);
    setProducts(allProdsInCategory);
  };

  const handleLoadClick = () => {
    setIsLoading(!isLoading);
  };

  const filterProducts = () => {
    const filteredProds = products.filter((product) => {
      return product.dictionaryTitle
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });
    setFilteredProducts(filteredProds);
  };

  const findBestMatch = () => {
    if (selectedProduct === undefined) {
      setProducts(allProdsInCategory);
      // getProducts();
      return;
    }
    let bestMatchingProducts = [];
    const selectedTitle = selectedProduct.dictionaryTitle;

    products
      .map((product) => {
        const similarityRating = compareTwoProductTitles(
          selectedTitle,
          product.dictionaryTitle
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
    filterProducts();
  }, [products, searchQuery]);

  useEffect(() => {
    findBestMatch();
  }, [selectedProduct]);

  useEffect(() => {
    getGroceryList();
    getFavoritesList();
  }, []);

  //   useEffect(() => {
  //     loadTestData();
  //   }, []);

  useEffect(() => {
    //  setIsLoading(true);
    getProducts();
  }, [category]);

  return (
    <Container>
      <Header>Compare Grocery Products</Header>
      <InputsContainer>
        <CategoryFilter setCategory={setCategory} />
        <SearchBox setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        <ResetCompareButton handleClick={handleResetCompareClick} />
        <button onClick={() => handleLoadClick()}>Toggle Load</button>
      </InputsContainer>

      <Grid>
        {storeTitles.map((storeTitle) => (
          <StoreList
            storeTitle={storeTitle}
            category={category}
            filteredProducts={filteredProducts}
            products={products}
            favoritesList={favoritesList}
            setFavoritesList={setFavoritesList}
            setGroceryList={setGroceryList}
            groceryList={groceryList}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            isLoading={isLoading}
            key={storeTitle}
          />
        ))}
        <UserListContainer>
          <UserList
            userList={groceryList}
            listTitle="Grocery"
            listText="Click the plus to add to grocery list"
            storeTitles={storeTitles}
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
            storeTitles={storeTitles}
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
