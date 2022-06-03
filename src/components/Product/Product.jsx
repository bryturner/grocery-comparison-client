import { Add, FavoriteBorderOutlined, Remove } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Title = styled.h3``;

const Price = styled.p``;

const Increment = styled.p``;

const ButtonWrapper = styled.div`
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

function Product(title, price, increment) {
  return (
    <Container>
      <Wrapper>
        <Title>Apple</Title>
        <Price>3.60</Price>
        <Increment>3.60/1kg</Increment>
        <ButtonWrapper>
          <Button>
            <Add />
          </Button>
          <Button>
            <Remove />
          </Button>
          <Button>
            <FavoriteBorderOutlined />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

export default Product;
