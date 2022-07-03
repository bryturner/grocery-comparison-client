import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { IconButton } from "../../../constants/styles";
import styled from "styled-components";

const FavoritesButtonStyled = styled(IconButton)`
  border: none;
`;

function FavoritesButton({ product, handleFavoriteClick, onFavoritesList }) {
  return (
    <FavoritesButtonStyled
      aria-label="favorite"
      onClick={() => handleFavoriteClick(product._id)}
    >
      {onFavoritesList ? <Favorite /> : <FavoriteBorderOutlined />}
    </FavoritesButtonStyled>
  );
}

export default FavoritesButton;
