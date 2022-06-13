import { Add, FavoriteBorderOutlined, Favorite } from "@mui/icons-material";
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

  const checkFavorites = useCallback(() => {
    if (!favorites[product._id]) setUserFavorite(false);
    if (favorites[product._id]) setUserFavorite(true);
  }, [product, favorites, setUserFavorite]);

  useEffect(() => {
    checkFavorites();
  }, [checkFavorites]);

  return (
    <Container>
      <Wrapper>
        <Title data-testid="product-title">{product.title}</Title>
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
          <Button>
            <Add />
          </Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
}

export default Product;
