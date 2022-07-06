import { useState, useCallback, useEffect, useContext } from "react";
import styled from "styled-components";
import UserListsContext from "../../contexts/UserListsContext";
import FavoritesButton from "../buttons/FavoritesButton/FavoritesButton";
import GroceryListButton from "../buttons/GroceryListButton/GroceryListButton";
import ProductCompareButton from "./ProductCompareButton";

const Container = styled.li`
  display: flex;
  padding: 0 1rem;
  gap: 1rem;
  align-items: center;
`;

const Divider = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.color.lightGray};
  width: 100%;
  /* height: 0.5rem;
	padding-bottom: 0.5rem; */
`;

const TextContainer = styled.div`
  display: flex;
  flex: 5;
  position: relative;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: bold;
`;

const Title = styled.p`
  flex: 2;
`;

const Increment = styled.p`
  flex: 1;
  text-align: right;
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
  selectedProduct,
  setSelectedProduct,
  onUserStoreList,
}) {
  const [onFavoritesList, setOnFavoritesList] = useState(false);
  const [onGroceryList, setOnGroceryList] = useState(false);

  const { groceryList, setGroceryList, favoritesList, setFavoritesList } =
    useContext(UserListsContext);

  //   When product clicked to remove selection -> products revert to default, not products from db
  const handleCompareClick = () => {
    if (selectedProduct === product) {
      setSelectedProduct(undefined);
    } else {
      setSelectedProduct(product);
    }
  };

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

  const checkOnUserFavoritesList = useCallback(() => {
    //  if (groceryList.length === 0) return;
    if (favoritesList.some((listProduct) => listProduct._id === product._id)) {
      setOnFavoritesList(true);
    } else {
      setOnFavoritesList(false);
    }
  }, [favoritesList, setOnFavoritesList, product._id]);

  const checkOnGroceryList = useCallback(() => {
    //  if (groceryList.length === 0) return;
    if (groceryList.some((listProduct) => listProduct._id === product._id)) {
      setOnGroceryList(true);
    } else {
      setOnGroceryList(false);
    }
  }, [groceryList, setOnGroceryList, product._id]);

  //   useEffect(() => {
  //     checkOnGroceryList();
  //   }, [checkOnGroceryList]);

  //   useEffect(() => {
  //     checkOnUserFavoritesList();
  //   }, [checkOnUserFavoritesList]);

  useEffect(() => {
    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  }, [handleFavoriteClick, favoritesList]);

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [handleGroceryListClick, groceryList]);

  return (
    <>
      <Container>
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
            {product.title.length > 30
              ? `${product.title.substring(0, 30)}...`
              : product.title}
          </Title>
          <Increment data-testid="product-increment">
            {product.incrStr}
          </Increment>
          <Price data-testid="product-price">{product.price.toFixed(2)}</Price>
        </TextContainer>
        <ButtonContainer>
          <ProductCompareButton
            onUserStoreList={onUserStoreList}
            product={product}
            selectedProduct={selectedProduct}
            handleCompareClick={handleCompareClick}
          />
        </ButtonContainer>
      </Container>
      <Divider />
    </>
  );
}

export default Product;
