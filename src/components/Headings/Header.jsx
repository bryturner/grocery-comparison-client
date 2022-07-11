import styled from "styled-components";
import PageSubheading from "./PageSubheading";
import PageHeading from "./PageHeading";

const HeaderStyled = styled.header`
  /* display: inline-block; */
  /* background-color: ${(props) => props.theme.color.e4}; */
  margin: 0 8rem 2rem 8rem;
  padding: 2rem;
  border-radius: 8px;
  /* display: flex;
  flex-direction: column;
  gap: 0.8rem; */
`;

function Header() {
  return (
    <HeaderStyled>
      <PageHeading heading="Compare Groceries in Switzerland" />
      <PageSubheading subheading="Find the best prices all within walking distance" />
    </HeaderStyled>
  );
}

export default Header;
