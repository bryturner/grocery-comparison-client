import { Add, Remove } from "@mui/icons-material";
import { IconButton } from "../../../constants/styles";

function GroceryListButton({ product, handleGroceryListClick, onGroceryList }) {
  return (
    <IconButton
      aria-label="grocery-list"
      onClick={() => handleGroceryListClick(product._id)}
    >
      {onGroceryList ? <Remove /> : <Add />}
    </IconButton>
  );
}

export default GroceryListButton;
