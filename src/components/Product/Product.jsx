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
  user,
  userFavoritesList,
  setUserFavoritesList,
  userGroceryList,
  setUserGroceryList,
  groceryList,
  setGroceryList,
  selectedProduct,
  setSelectedProduct,
}) {
  const [onFavorites, setOnFavorites] = useState(false);
  const [onGroceryList, setOnGroceryList] = useState(false);

  const handleProductClicked = () => {
    if (selectedProduct === product) {
      setSelectedProduct(undefined);
    } else {
      setSelectedProduct(product);
    }
  };

  //   User favorites list
  const handleFavoriteClick = (id) => {
    if (onFavorites) {
      setOnFavorites(false);
      setUserFavoritesList(
        userFavoritesList.filter((favorite) => {
          return favorite != id;
        })
      );
      // Will be updated in database with put
      user.lists.favorites = userFavoritesList.filter((favorite) => {
        return favorite != id;
      });
    }

    if (!onFavorites) {
      setOnFavorites(true);
      setUserFavoritesList([...userFavoritesList, id]);
      // Will be updated in database with put
      user.lists.favorites.push(id);
    }
  };

  const checkOnUserFavoritesList = useCallback(() => {
    if (userFavoritesList.includes(product._id)) {
      setOnFavorites(true);
    }
  }, [userFavoritesList, setOnFavorites]);

  useEffect(() => {
    checkOnUserFavoritesList();
  }, [checkOnUserFavoritesList]);

  //   User grocery list
  const handleGroceryListClick = (id) => {
    if (onGroceryList) {
      setOnGroceryList(false);
      setGroceryList(
        groceryList.filter((grocery) => {
          return (grocery = !id);
        })
      );
      // Will be updated in database with put
      user.lists.grocList = groceryList.filter((grocery) => {
        return (grocery = !id);
      });
    }
    if (!onGroceryList) {
      setOnGroceryList(true);
      setGroceryList([...groceryList, id]);
      // Will be updated in database with put
      user.lists.grocList.push(id);
    }
  };

  const checkOnGroceryList = useCallback(() => {
    if (groceryList.includes(product._id)) {
      setOnGroceryList(true);
    }
  }, [groceryList, setOnGroceryList]);

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
        <Button
          aria-label="favorite"
          onClick={() => handleFavoriteClick(product._id)}
        >
          {onFavorites ? <Favorite /> : <FavoriteBorderOutlined />}
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
