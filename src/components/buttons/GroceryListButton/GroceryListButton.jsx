import styled from "styled-components";
import { Plus, Minus } from "phosphor-react";

const GroceryButtonStyled = styled.button`
  flex: 1;
  cursor: pointer;
  border: ${(props) =>
    props.onGroceryList
      ? "1px solid rgba(255, 38, 38, 0.35)"
      : "1px solid rgba(90, 153, 90, 0.55)"};
  border-radius: 50%;
  padding: 0.2rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  background-color: ${(props) =>
    props.onGroceryList
      ? "rgba(255, 38, 38, 0.15)"
      : "rgba(142, 198, 142, 0.3)"};

  &:hover {
    /* background-color: rgba(142, 198, 142, 0.5); */
    background-color: ${(props) =>
      props.onGroceryList
        ? "rgba(255, 38, 38, 0.25)"
        : "rgba(142, 198, 142, 0.55)"};
  }
`;

function GroceryListButton({ product, handleGroceryListClick, onGroceryList }) {
  return (
    <GroceryButtonStyled
      onGroceryList={onGroceryList}
      aria-label="grocery-list"
      onClick={() => handleGroceryListClick(product._id)}
    >
      {onGroceryList ? (
        <Minus size={14} color="#333" weight="bold" />
      ) : (
        <Plus size={14} color="#333" weight="bold" />
      )}
    </GroceryButtonStyled>
  );
}

export default GroceryListButton;
