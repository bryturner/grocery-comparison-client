import styled from "styled-components";

function Store({ storeName }) {
  const Container = styled.div`
    border: 1px solid black;
    padding: 1rem;
  `;

  const Header = styled.h2`
    font-size: 2.4rem;
    text-align: center;
  `;
  return (
    <Container>
      <Header>{storeName}</Header>
    </Container>
  );
}

export default Store;
