import {
  Add,
  Remove,
  FavoriteBorderOutlined,
  Favorite,
} from "@mui/icons-material";
import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
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

const Store = styled.p`
  flex: 1;
  text-align: center;
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

const Button = styled.button`
  background-color: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Product({
  product,
  favorites,
  setFavorites,
  groceryList,
  setGroceryList,
  displayStoreName,
  selectedProduct,
  setSelectedProduct,
}) {
  const [userFavorite, setUserFavorite] = useState(product.userFavorite);
  const [onGroceryList, setOnGroceryList] = useState(product.onGroceryList);

  //   const handleProductClicked = () => {
  //     if (selectedProduct === product) {
  //       setSelectedProduct(undefined);
  //     } else {
  //       setSelectedProduct(product);
  //     }
  //   };

  const handleFavoriteClick = (id) => {
    if (userFavorite) {
      const newFavorites = favorites;
      delete newFavorites[id];
      const updatedFavorites = (prevState) => {
        return { ...prevState, ...newFavorites };
      };
      setFavorites(updatedFavorites);
    }
    if (!userFavorite) setFavorites({ ...favorites, [id]: product });
  };

  const handleGroceryListClick = (id) => {
    if (onGroceryList) {
      const newGroceryList = groceryList;
      delete newGroceryList[id];
      const updatedGroceryList = (prevState) => {
        return { ...prevState, ...newGroceryList };
      };
      setGroceryList(updatedGroceryList);
    }
    if (!onGroceryList) setGroceryList({ ...groceryList, [id]: product });
  };

  //   const checkFavorites = useCallback(() => {
  //     if (!favorites[product._id]) setUserFavorite(false);
  //     if (favorites[product._id]) setUserFavorite(true);
  //   }, [product, favorites, setUserFavorite]);

  //   const checkGroceryList = useCallback(() => {
  //     if (!groceryList[product._id]) setOnGroceryList(false);
  //     if (groceryList[product._id]) setOnGroceryList(true);
  //   }, [product, groceryList, setOnGroceryList]);

  //   useEffect(() => {
  //     checkFavorites();
  //   }, [checkFavorites]);

  //   useEffect(() => {
  //     checkGroceryList();
  //   }, [checkGroceryList]);

  return (
    <Container>
      <TextContainer>
        {/* <SelectProductButton
          product={product}
          selectedProduct={selectedProduct}
          handleProductClicked={handleProductClicked}
        /> */}
        <Title data-testid="product-title">{product.title}</Title>
        {/* {displayStoreName ? (
          <Store data-testid="product-store">{product.storeName}</Store>
        ) : (
          <></>
        )} */}
        <Increment data-testid="product-increment">
          {product.increment.incrStr}
        </Increment>
        <Price data-testid="product-price">{product.price.toFixed(2)}</Price>
      </TextContainer>
      <ButtonContainer>
        <Button
          aria-label="favorite"
          onClick={() => handleFavoriteClick(product._id)}
        >
          {userFavorite ? <Favorite /> : <FavoriteBorderOutlined />}
        </Button>
        <Button
          aria-label="grocery-list"
          onClick={() => handleGroceryListClick(product._id)}
        >
          {onGroceryList ? <Remove /> : <Add />}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Product;
