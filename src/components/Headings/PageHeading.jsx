import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.hd1};
  font-family: ${(props) => props.theme.fontFamily.hd1};
  color: ${(props) => props.theme.color.darkGray};
  text-align: center;
`;

function PageHeading({ heading }) {
  return <Heading>{heading}</Heading>;
}

export default PageHeading;
