import styled from "styled-components";
import React from "react";
import { SecondaryButton } from "../../ThemeProvider/Theme";

const Container = styled.div`
  padding-left: 1rem;
`;

const ResetButton = styled(SecondaryButton)`
  font-size: ${(props) => props.theme.fontSize.smMd};
  height: 32.5px;
  padding: 0.65rem 2rem;
  border: 1px solid ${(props) => props.theme.color.medGray};
`;

function ResetCompareButton({ dispatchFilter }) {
  return (
    <Container>
      <ResetButton onClick={() => dispatchFilter({ type: "reset" })}>
        Reset Comparison
      </ResetButton>
    </Container>
  );
}

export default React.memo(ResetCompareButton);
