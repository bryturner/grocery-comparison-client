import { Add, FavoriteBorderOutlined } from "@mui/icons-material";
import { useContext, useState } from "react";
import styled from "styled-components";
import { user } from "../../assets/data";

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

function Product({ product }) {
  const [favoritesList, setFavoritesList] = useState(user.favoritesList);

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
  return (
    <Container>
      <Wrapper>
        <Title>{formatTitle(product.title)}</Title>
        <Increment>{product.incrementString}</Increment>
        <Price>{product.price.toFixed(2)}</Price>
        <ButtonContainer>
          <Button>
            <FavoriteBorderOutlined />
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
