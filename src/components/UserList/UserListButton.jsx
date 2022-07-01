import styled from "styled-components";

export const Button = styled.button``;

function UserListButton({ handleClick, buttonName }) {
  return <Button onClick={() => handleClick()}>{buttonName}</Button>;
}

export default UserListButton;
