import styled from "styled-components";
import { XCircle } from "phosphor-react";

const Container = styled.div`
  /* display: ${(props) => (props.isError ? "block" : "none")}; */
  opacity: ${(props) => (props.isError ? "1" : "0")};
  visibility: ${(props) => (props.isError ? "visible" : "none")};
  width: fit-content;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  vertical-align: middle;
  display: inline-block;
  padding-right: 0.4rem;
`;

const Error = styled.span`
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.color.red};
`;

function ErrorMessage({ isError, errorMsg }) {
  return (
    <Container isError={isError}>
      <IconWrapper>
        <XCircle size={18} color="#f20707" />
      </IconWrapper>
      <Error>{errorMsg}</Error>
    </Container>
  );
}

export default ErrorMessage;
