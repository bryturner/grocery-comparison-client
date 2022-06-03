import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Title = styled.p``;
const Checkbox = styled.input`
  height: 1.6rem;
  width: 1.6rem;
`;

function Filter() {
  return (
    <Container>
      <Title>Sale items only:</Title>
      <Checkbox type="checkbox" />
    </Container>
  );
}

export default Filter;
