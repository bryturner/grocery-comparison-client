import styled from "styled-components";
import { SecondaryButton } from "../../constants/styles";

export const Button = styled(SecondaryButton)``;

function UserListButton({ handleClick, buttonName }) {
  return <Button onClick={() => handleClick()}>{buttonName}</Button>;
}

export default UserListButton;
