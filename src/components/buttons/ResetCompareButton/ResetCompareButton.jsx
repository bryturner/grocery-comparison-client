import styled from "styled-components";
import { SecondaryButton } from "../../../constants/styles";

export const ResetButton = styled(SecondaryButton)``;

function ResetCompareButton({ handleClick }) {
  return (
    <ResetButton onClick={() => handleClick()}>Reset Comparison</ResetButton>
  );
}

export default ResetCompareButton;
