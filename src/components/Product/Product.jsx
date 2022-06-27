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
  user,
  userFavoritesList,
  setUserFavoritesList,
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
  const handleFavoriteClick = (id) => {
    if (onFavoritesList) {
      setOnFavoritesList(false);
      setUserFavoritesList(
        userFavoritesList.filter((listProduct) => {
          return listProduct._id !== id;
        })
      );
      // Local storage access
    }

    if (!onFavoritesList) {
      setOnFavoritesList(true);
      setUserFavoritesList([...userFavoritesList, product]);
      // Local storage access
    }
  };

  const checkOnUserFavoritesList = useCallback(() => {
    if (
      userFavoritesList.some((listProduct) => listProduct._id === product._id)
    ) {
      setOnFavoritesList(true);
    } else {
      setOnFavoritesList(false);
    }
  }, [userFavoritesList, setOnFavoritesList, product._id]);

  useEffect(() => {
    checkOnUserFavoritesList();
  }, [checkOnUserFavoritesList]);

  // ===== User grocery list =====
  const handleGroceryListClick = (id) => {
    if (onGroceryList) {
      setOnGroceryList(false);
      setGroceryList(
        groceryList.filter((listProduct) => {
          return listProduct._id !== id;
        })
      );
      // Local storage access
    }
    if (!onGroceryList) {
      setOnGroceryList(true);
      setGroceryList([...groceryList, product]);
      // Local storage access
    }
  };

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

  return (
    <Container>
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
