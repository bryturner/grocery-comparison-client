import styled from "styled-components";

export const Button = styled.button`
  background-color: none;
  cursor: pointer;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
`;

export const PrimaryButton = styled(Button)``;

export const SecondaryButton = styled(Button)``;

export const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
`;

export const ListWithBorder = styled.ul`
  border: 2px solid #999;
  border-radius: 8px;
  padding: 1rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 25rem;
  overflow-y: scroll;
`;
