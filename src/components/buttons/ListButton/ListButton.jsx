import styled from "styled-components";

export const Button = styled.button``;

function ListButton({ handleClick, buttonName }) {
  return <Button onClick={() => handleClick()}>{buttonName}</Button>;
}

export default ListButton;
