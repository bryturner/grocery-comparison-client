import styled from "styled-components";
import ProductList from "../Product/ProductList";

function Store({ storeName }) {
  const Container = styled.div`
    /* border: 1px solid black; */
    padding: 1rem 0;
  `;

  const Header = styled.h2`
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: 1.2rem;
  `;
  return (
    <Container>
      <Header>{storeName}</Header>
      <ProductList />
    </Container>
  );
}

export default Store;
