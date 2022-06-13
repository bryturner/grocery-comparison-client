import {
  Add,
  Remove,
  FavoriteBorderOutlined,
  Favorite,
} from "@mui/icons-material";
import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { user } from "../../data";

const Container = styled.li``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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

const Amount = styled.p`
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
  /* flex: 1; */
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
}) {
  // Use to remove unnecessary words from titles
  const formatTitle = (title) => {
    let formattedTitle = title;
    if (title.includes("Naturaplan")) {
      formattedTitle = title.replace("Naturaplan", "");
    }
    if (title.includes("ca.")) {
      formattedTitle = title.slice(0, title.indexOf("ca."));
    }
    return formattedTitle;
  };

  const [userFavorite, setUserFavorite] = useState(product.userFavorite);
  const [onGroceryList, setOnGroceryList] = useState(product.onGroceryList);

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

  const checkFavorites = useCallback(() => {
    if (!favorites[product._id]) setUserFavorite(false);
    if (favorites[product._id]) setUserFavorite(true);
  }, [product, favorites, setUserFavorite]);

  const checkGroceryList = useCallback(() => {
    if (!groceryList[product._id]) setOnGroceryList(false);
    if (groceryList[product._id]) setOnGroceryList(true);
  }, [product, groceryList, setOnGroceryList]);

  useEffect(() => {
    checkFavorites();
  }, [checkFavorites]);

  useEffect(() => {
    checkGroceryList();
  }, [checkGroceryList]);

  return (
    <Container>
      <Wrapper>
        <Title data-testid="product-title">{product.title}</Title>
        {displayStoreName ? (
          <Store data-testid="product-store">{product.storeName}</Store>
        ) : (
          <></>
        )}
        <Increment data-testid="product-increment">
          {product.incrementString}
        </Increment>
        <Price data-testid="product-price">{product.price.toFixed(2)}</Price>
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
      </Wrapper>
    </Container>
  );
}

export default Product;
