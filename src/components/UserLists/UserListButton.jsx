import styled from "styled-components";
import { Button } from "../ThemeProvider/Theme";

const ListButton = styled(Button)`
  padding: 0.5rem 1.2rem;
`;

function UserListButton({ handleClick, buttonText }) {
  return <ListButton onClick={() => handleClick()}>{buttonText}</ListButton>;
}

export default UserListButton;
