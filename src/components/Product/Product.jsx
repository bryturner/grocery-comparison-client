import { useMemo } from "react";
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
`;

const TextContainer = styled.div`
  display: flex;
  flex: 5;
  position: relative;
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: bold;
`;

const Title = styled.p`
  flex: 3;
  width: 50px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s linear;

  &:hover {
    overflow: visible;
  }
`;

const Link = styled.a`
  text-decoration: none;

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:focus {
    border-bottom: 1px solid red;
  }

  &:hover {
    border-bottom: 1px solid red;
  }

  &:active {
    color: inherit;
  }
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

  const handleFavoriteClick = useCallback(
    (id) => {
      if (onFavoritesList) {
        setOnFavoritesList(false);
        const { [id]: product, ...newFavoritesList } = favoritesList;
        setFavoritesList(newFavoritesList);
      }
      if (!onFavoritesList) {
        setOnFavoritesList(true);
        setFavoritesList({ ...favoritesList, [id]: product });
      }
    },
    [favoritesList, onFavoritesList, product, setFavoritesList]
  );

  const handleGroceryListClick = useCallback(
    (id) => {
      if (onGroceryList) {
        setOnGroceryList(false);
        const { [id]: product, ...newGroceryList } = groceryList;
        setGroceryList(newGroceryList);
      }
      if (!onGroceryList) {
        setOnGroceryList(true);
        setGroceryList({ ...groceryList, [id]: product });
      }
    },
    [groceryList, onGroceryList, product, setGroceryList]
  );

  const checkOnUserFavoritesList = useCallback(() => {
    if (favoritesList[product._id]) {
      setOnFavoritesList(true);
    } else {
      setOnFavoritesList(false);
    }
  }, [favoritesList, setOnFavoritesList, product._id]);

  const checkOnGroceryList = useCallback(() => {
    if (groceryList[product._id]) {
      setOnGroceryList(true);
    } else {
      setOnGroceryList(false);
    }
  }, [groceryList, setOnGroceryList, product._id]);

  useEffect(() => {
    checkOnGroceryList();
  }, [checkOnGroceryList]);

  useEffect(() => {
    checkOnUserFavoritesList();
  }, [checkOnUserFavoritesList]);

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
            <Link href={product.prodLink} target="_blank">
              {product.title}
            </Link>
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
            setSelectedProduct={setSelectedProduct}
          />
        </ButtonContainer>
      </Container>
      <Divider />
    </>
  );
}

export default Product;
