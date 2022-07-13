import styled from "styled-components";
import FooterLink from "./FooterLink";

const Container = styled.div`
  margin-top: 5rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.733);
  display: flex;
  justify-content: space-around;
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.md};
`;

function Footer() {
  return (
    <Container>
      <FooterLink
        url="https://github.com/bryturner/grocery-comparison-client"
        linkText="Github Repo"
      />
      <Text>Website by Bryan Turner</Text>
      <FooterLink
        url="https://www.linkedin.com/in/bryanturnerdev/"
        linkText="LinkedIn Profile"
      />
    </Container>
  );
}

export default Footer;
