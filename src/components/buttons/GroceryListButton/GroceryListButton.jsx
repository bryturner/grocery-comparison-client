import { Add, Remove } from "@mui/icons-material";
import { PrimaryButton } from "../../../constants/styles";

function GroceryListButton({ product, handleGroceryListClick, onGroceryList }) {
  return (
    <PrimaryButton
      aria-label="grocery-list"
      onClick={() => handleGroceryListClick(product._id)}
    >
      {onGroceryList ? <Remove /> : <Add />}
    </PrimaryButton>
  );
}

export default GroceryListButton;
