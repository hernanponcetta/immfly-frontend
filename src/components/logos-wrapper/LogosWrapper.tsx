import React from "react";
import styled from "styled-components";

import PokeLogo from "./PokeLogo";
import IfyLogo from "./IfyLogo";

const StyledDiv = styled.div`
  box-sizing: border-box;
  margin-bottom: 2rem;
`;

const LogosWrapper = () => {
  return (
    <StyledDiv>
      <IfyLogo />
      <PokeLogo />
    </StyledDiv>
  );
};

export default LogosWrapper;
