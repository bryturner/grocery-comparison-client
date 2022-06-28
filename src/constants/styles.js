import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListWithBorder = styled(List)`
  border: 2px solid black;
  border-radius: 8px;
  padding: 0.5rem;
`;
