import styled from "styled-components";
import { SecondaryButton } from "../../constants/styles";

export const Button = styled(SecondaryButton)``;

function UserListButton({ handleClick, buttonText }) {
  return <Button onClick={() => handleClick()}>{buttonText}</Button>;
}

export default UserListButton;
