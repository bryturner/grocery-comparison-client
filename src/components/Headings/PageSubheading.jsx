import styled from "styled-components";

const Text = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.color.darkGray};
`;

function PageSubheading({ subheading }) {
  return <Text>{subheading}</Text>;
}

export default PageSubheading;
