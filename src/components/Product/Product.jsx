import { useState, useCallback, useEffect, useContext } from "react";
import styled from "styled-components";
import { UserListsContext } from "../../contexts/UserListsContext";
import FavoritesButton from "./ProductButtons/FavoritesButton";
import GroceryButton from "./ProductButtons/GroceryButton";
import ProductDivider from "../Utils/ProductDivider";
import ProductCompareButton from "./ProductButtons/ProductCompareButton";
import ProductDetail from "./ProductDetail";

const Container = styled.li`
  display: flex;
  padding: 0 1.6rem;
  gap: 1.4rem;
  align-items: center;
`;

const TextContainer = styled.div`
  flex: 5;
  display: grid;
  grid-template-columns: 72fr 28fr;
  gap: 2rem;
  overflow-y: hidden;
  white-space: nowrap;
`;

const TitleWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  align-self: center;
  white-space: nowrap;
  overflow-y: hidden;

  &:hover {
    overflow: visible;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  &:hover {
    padding-right: 3rem;
    background: linear-gradient(
      90deg,
      rgba(255, 236, 210, 1) 92%,
      rgba(255, 236, 210, 0.5) 100%
    );
  }
`;

const Link = styled.a`
  font-size: ${(props) => props.theme.fontSize.mdLg};
  text-decoration: none;
  transition: all 0.1s linear;

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    border-bottom: 1px solid black;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

function Product({ product, dispatchFilter, listType }) {
  const [onFavoritesList, setOnFavoritesList] = useState(false);
  const [onGroceryList, setOnGroceryList] = useState(false);

  const productPrice = product.price.toFixed(2);
  const productIncrement = product.incrStr;
  const productTitle = product.title;
  const productLink = product.prodLink;

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
          <GroceryButton
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
          <TitleWrapper>
            <Title data-testid="product-title">
              <Link href={productLink} target="_blank">
                {productTitle}
              </Link>
            </Title>
          </TitleWrapper>
          <DetailContainer>
            <ProductDetail
              detailText={productPrice}
              detailTitle="Total"
              detailType="price"
            />
            <ProductDetail
              detailText={productIncrement}
              detailTitle="Price/unit"
              detailType="increment"
            />
          </DetailContainer>
        </TextContainer>
        <ButtonContainer>
          <ProductCompareButton
            listType={listType}
            product={product}
            dispatchFilter={dispatchFilter}
          />
        </ButtonContainer>
      </Container>
      <ProductDivider listType={listType} />
    </>
  );
}

export default Product;
