import styled from "styled-components";

const StoreTitle = styled.h3`
  border-bottom: ${(props) => props.theme.border.userListStoreTitle};
  font-size: ${(props) => props.theme.fontSize.hd3};
  color: ${(props) => props.theme.color.darkBlue};
  padding: 0 0 0.5rem 2rem;
`;

function UserListStoreTitle({ storeTitle }) {
  return <StoreTitle>{storeTitle}</StoreTitle>;
}

export default UserListStoreTitle;
