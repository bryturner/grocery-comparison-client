import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import FavoritesButton from "../buttons/FavoritesButton/FavoritesButton";
import GroceryListButton from "../buttons/GroceryListButton/GroceryListButton";
import SelectProductButton from "../buttons/SelectProductButton/SelectProductButton";

const Container = styled.li`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 6;
  position: relative;
`;

const Title = styled.p`
  flex: 2;
`;

const Price = styled.p`
  flex: 1;
  text-align: center;
`;

const Increment = styled.p`
  flex: 1;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

function Product({
  product,
  favoritesList,
  setFavoritesList,
  groceryList,
  setGroceryList,
  selectedProduct,
  setSelectedProduct,
}) {
  const [onFavoritesList, setOnFavoritesList] = useState(false);
  const [onGroceryList, setOnGroceryList] = useState(false);

  const handleProductClicked = () => {
    if (selectedProduct === product) {
      setSelectedProduct(undefined);
    } else {
      setSelectedProduct(product);
    }
  };

  //  ====== User favorites list  ======
  const handleFavoriteClick = useCallback(
    (id) => {
      if (onFavoritesList) {
        setOnFavoritesList(false);
        setFavoritesList(
          favoritesList.filter((listProduct) => {
            return listProduct._id !== id;
          })
        );
      }
      if (!onFavoritesList) {
        setOnFavoritesList(true);
        setFavoritesList([...favoritesList, product]);
      }
    },
    [favoritesList, onFavoritesList, product, setFavoritesList]
  );

  const checkOnUserFavoritesList = useCallback(() => {
    if (favoritesList.some((listProduct) => listProduct._id === product._id)) {
      setOnFavoritesList(true);
    } else {
      setOnFavoritesList(false);
    }
  }, [favoritesList, setOnFavoritesList, product._id]);

  useEffect(() => {
    checkOnUserFavoritesList();
  }, [checkOnUserFavoritesList]);

  // ===== User grocery list =====
  const handleGroceryListClick = useCallback(
    (id) => {
      if (onGroceryList) {
        setOnGroceryList(false);
        setGroceryList(
          groceryList.filter((listProduct) => {
            return listProduct._id !== id;
          })
        );
      }
      if (!onGroceryList) {
        setOnGroceryList(true);
        setGroceryList([...groceryList, product]);
      }
    },
    [groceryList, onGroceryList, product, setGroceryList]
  );

  const checkOnGroceryList = useCallback(() => {
    if (groceryList.some((listProduct) => listProduct._id === product._id)) {
      setOnGroceryList(true);
    } else {
      setOnGroceryList(false);
    }
  }, [groceryList, setOnGroceryList, product._id]);

  useEffect(() => {
    checkOnGroceryList();
  }, [checkOnGroceryList]);

  useEffect(() => {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }, [handleFavoriteClick, favoritesList]);

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [handleGroceryListClick, groceryList]);

  return (
    <Container data-testid={`product-${product._id}`}>
      <TextContainer>
        <SelectProductButton
          product={product}
          selectedProduct={selectedProduct}
          handleProductClicked={handleProductClicked}
        />
        <Title data-testid="product-title">{product.title}</Title>
        <Increment data-testid="product-increment">
          {product.increment.incrStr}
        </Increment>
        <Price data-testid="product-price">{product.price.toFixed(2)}</Price>
      </TextContainer>
      <ButtonContainer>
        <FavoritesButton
          product={product}
          handleFavoriteClick={handleFavoriteClick}
          onFavoritesList={onFavoritesList}
        />
        <GroceryListButton
          product={product}
          handleGroceryListClick={handleGroceryListClick}
          onGroceryList={onGroceryList}
        />
      </ButtonContainer>
    </Container>
  );
}

export default Product;
