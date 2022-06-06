import { Add, FavoriteBorderOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.li``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Title = styled.p``;

const Price = styled.p``;

const Amount = styled.p``;

const Increment = styled.p``;

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

function Product({ product }) {
  return (
    <Container>
      <Wrapper>
        <Title>Apples</Title>
        <Increment>3.60/1kg</Increment>
        <Amount>1kg</Amount>
        <Price>3.60</Price>
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
