import { Link } from "phosphor-react";
import styled from "styled-components";

const StoreLink = styled.a``;

function StoreLink({ storeLink }) {
  return (
    <StoreLink href={storeLink}>
      <Link size={48} color="#2d2e2d" />
    </StoreLink>
  );
}

export default StoreLink;
