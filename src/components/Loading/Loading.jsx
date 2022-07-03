import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
`;

function Loading({ type, color, height, width }) {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
}

export default Loading;
