import styled from "styled-components";
import { SecondaryButton } from "../ThemeProvider/Theme";

const ListButton = styled(SecondaryButton)`
  font-size: ${(props) => props.theme.fontSize.md};
  padding: 0.5rem 1.2rem;
  border: ${(props) => props.theme.border.userListButton};
`;

function UserListButton({ handleClick, buttonText }) {
  return <ListButton onClick={() => handleClick()}>{buttonText}</ListButton>;
}

export default UserListButton;
