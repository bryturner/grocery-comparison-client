import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "../../../constants/styles";
import styled from "styled-components";

const GroceryButtonStyled = styled(IconButton)`
  border: 1px solid green;
  border-radius: 50%;
  padding: 0.3rem;
`;

function GroceryListButton({ product, handleGroceryListClick, onGroceryList }) {
  return (
    <GroceryButtonStyled
      aria-label="grocery-list"
      onClick={() => handleGroceryListClick(product._id)}
    >
      {onGroceryList ? <Remove /> : <Add />}
    </GroceryButtonStyled>
  );
}

export default GroceryListButton;
