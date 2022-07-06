import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  opacity: ${(props) => (props.isLoading ? "1" : "0")};
  visibility: ${(props) => (props.isLoading ? "visible" : "hidden")};
`;

function Loading({ type, color }) {
  return (
    <ReactLoading type={type} color={color} height={"64px"} width={"64px"} />
  );
}

export default Loading;
