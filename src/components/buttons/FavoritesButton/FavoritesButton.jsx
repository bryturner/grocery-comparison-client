import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { IconButton } from "../../../constants/styles";

function FavoritesButton({ product, handleFavoriteClick, onFavoritesList }) {
  return (
    <IconButton
      aria-label="favorite"
      onClick={() => handleFavoriteClick(product._id)}
    >
      {onFavoritesList ? <Favorite /> : <FavoriteBorderOutlined />}
    </IconButton>
  );
}

export default FavoritesButton;
