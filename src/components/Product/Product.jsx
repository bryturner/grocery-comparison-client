import { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import FavoritesButton from "../buttons/FavoritesButton/FavoritesButton";
import GroceryListButton from "../buttons/GroceryListButton/GroceryListButton";
import SelectProductButton from "../buttons/SelectProductButton/SelectProductButton";

const Container = styled.li`
  display: flex;
  padding: 0 1rem;
  gap: 1rem;
  align-items: flex-end;
`;

const Divider = styled.div`
  border-bottom: 1px solid lightgray;
  width: 100%;
  /* height: 0.5rem;
	padding-bottom: 0.5rem; */
`;

const TextContainer = styled.div`
  display: flex;
  flex: 5;
  position: relative;
  font-size: 1.4rem;
  font-weight: bold;
`;

const Title = styled.p`
  flex: 2;
`;

const Increment = styled.p`
  flex: 1;
  text-align: right;
`;

const Quantity = styled.p`
  flex: 1;
  text-align: left;
`;
const Price = styled.p`
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
  onUserStoreList,
}) {
  const [onFavoritesList, setOnFavoritesList] = useState(false);
  const [onGroceryList, setOnGroceryList] = useState(false);

  //   When product clicked to remove selection -> products revert to default, not products from db
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
    <>
      <Container data-testid={`product-${product._id}`}>
        <ButtonContainer>
          <GroceryListButton
            product={product}
            handleGroceryListClick={handleGroceryListClick}
            onGroceryList={onGroceryList}
          />
          <FavoritesButton
            product={product}
            handleFavoriteClick={handleFavoriteClick}
            onFavoritesList={onFavoritesList}
          />
        </ButtonContainer>
        <TextContainer>
          <Title data-testid="product-title">
            {product.displayTitle.length > 30
              ? `${product.displayTitle.substring(0, 30)}...`
              : product.displayTitle}
          </Title>
          <Increment data-testid="product-increment">
            {product.incrStr}
          </Increment>
          {/* <Quantity>{product.qtyStr}</Quantity> */}
          <Price data-testid="product-price">{product.price.toFixed(2)}</Price>
        </TextContainer>
        <ButtonContainer>
          {/* <FavoritesButton
            product={product}
            handleFavoriteClick={handleFavoriteClick}
            onFavoritesList={onFavoritesList}
          />
          <GroceryListButton
            product={product}
            handleGroceryListClick={handleGroceryListClick}
            onGroceryList={onGroceryList}
          /> */}
          <SelectProductButton
            onUserStoreList={onUserStoreList}
            product={product}
            selectedProduct={selectedProduct}
            handleProductClicked={handleProductClicked}
          />
        </ButtonContainer>
      </Container>
      <Divider />
    </>
  );
}

export default Product;
