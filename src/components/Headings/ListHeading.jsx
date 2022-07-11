import styled from "styled-components";

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.hd2};
  font-family: ${(props) => props.theme.fontFamily.hd3};
  color: ${(props) => props.theme.color.darkGray};
  font-weight: bold;
  background-color: ${(props) =>
    props.listType === "userList"
      ? props.theme.color.medBlue
      : props.listType === "storeList"
      ? props.theme.color.medOrange
      : "none"};
  text-align: center;
  padding: 1rem 0;
`;

function ListHeading({ heading, listType }) {
  return <Heading listType={listType}>{heading}</Heading>;
}

export default ListHeading;
