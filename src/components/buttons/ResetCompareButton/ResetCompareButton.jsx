import styled from "styled-components";
import { Button } from "../../../constants/styles";

export const ResetButton = styled(Button)``;

function ResetCompareButton({ handleClick }) {
  return (
    <ResetButton onClick={() => handleClick()}>Reset Comparison</ResetButton>
  );
}

export default ResetCompareButton;
