import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { PrimaryButton } from "../../../constants/styles";

function FavoritesButton({ product, handleFavoriteClick, onFavoritesList }) {
  return (
    <PrimaryButton
      aria-label="favorite"
      onClick={() => handleFavoriteClick(product._id)}
    >
      {onFavoritesList ? <Favorite /> : <FavoriteBorderOutlined />}
    </PrimaryButton>
  );
}

export default FavoritesButton;
