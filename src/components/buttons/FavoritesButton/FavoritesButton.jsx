import styled from "styled-components";
import { HeartStraight } from "phosphor-react";

const FavoritesButtonStyled = styled.button`
  flex: 1;
  cursor: pointer;
  padding: 0.3rem;
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.2);
  }
`;

function FavoritesButton({ product, handleFavoriteClick, onFavoritesList }) {
  return (
    <FavoritesButtonStyled
      aria-label="favorite"
      onClick={() => handleFavoriteClick(product._id)}
    >
      {onFavoritesList ? (
        <HeartStraight size={20} color="#df4646" weight="fill" />
      ) : (
        <HeartStraight size={20} color="#484342" weight="bold" />
      )}
    </FavoritesButtonStyled>
  );
}

export default FavoritesButton;
