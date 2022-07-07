import styled from "styled-components";
import { Plus, Minus } from "phosphor-react";

const GroceryButtonStyled = styled.button`
  flex: 1;
  cursor: pointer;
  border: ${(props) =>
    props.onGroceryList
      ? "1px solid rgba(255, 38, 38, 0.3)"
      : "1px solid rgba(90, 153, 90, 0.5)"};
  border-radius: 50%;
  padding: 0.3rem;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  transition: all 0.2s linear;
  background-color: ${(props) =>
    props.onGroceryList
      ? "rgba(255, 38, 38, 0.1)"
      : "rgba(142, 198, 142, 0.2)"};

  &:hover {
    /* background-color: rgba(142, 198, 142, 0.5); */
    background-color: ${(props) =>
      props.onGroceryList
        ? "rgba(255, 38, 38, 0.25)"
        : "rgba(142, 198, 142, 0.5)"};
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
        <Minus size={14} color="#2d2e2d" weight="fill" />
      ) : (
        <Plus size={14} color="#2d2e2d" weight="fill" />
      )}
    </GroceryButtonStyled>
  );
}

export default GroceryListButton;
