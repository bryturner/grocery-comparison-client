import styled from "styled-components";

export const Link = styled.a`
  font-size: ${(props) => props.theme.fontSize.md};
  text-decoration: none;
  transition: all 0.1s linear;

  &:link {
    color: inherit;
  }

  &:visited {
    color: inherit;
  }

  &:hover {
    color: ${(props) => props.theme.color.darkBlue};
  }
`;

function FooterLink({ url, linkText }) {
  return (
    <Link href={url} target="_blank">
      {linkText}
    </Link>
  );
}

export default FooterLink;
