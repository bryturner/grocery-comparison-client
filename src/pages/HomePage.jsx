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

const ListButton = styled.button`
  cursor: pointer;
`;

function HomePage() {
  const [user, setUser] = useState(testUser1);
  const [products, setProducts] = useState(testProducts);
  const [category, setCategory] = useState("fruechte-gemuese");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(undefined);

  const [groceryList, setGroceryList] = useState(user.lists.grocList);

  const [userFavoritesList, setUserFavoritesList] = useState(
    user.lists.favorites
  );

  //  const getProducts = async () => {
  //    try {
  //      const productResponse = await axios.get("http://localhost:8000/product");
  //      setProducts(productResponse.data);
  //    } catch (err) {
  //      console.error(err);
  //      return [];
  //    }
  //  };

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
    findBestMatch();
  }, [selectedProduct]);

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
            searchQuery={searchQuery}
            products={products}
            user={user}
            userFavoritesList={userFavoritesList}
            setUserFavoritesList={setUserFavoritesList}
            setGroceryList={setGroceryList}
            groceryList={groceryList}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            key={storeName}
          />
        ))}

        <GroceryList
          userFavoritesList={userFavoritesList}
          groceryList={groceryList}
          setGroceryList={setGroceryList}
        />
        <FavoritesList
          userFavoritesList={userFavoritesList}
          setUserFavoritesList={setUserFavoritesList}
          groceryList={groceryList}
        />
        <ButtonContainer>
          <ListButton>Save list</ListButton>
          <ListButton>Share list</ListButton>
        </ButtonContainer>
      </Grid>
    </Container>
  );
}

export default HomePage;
