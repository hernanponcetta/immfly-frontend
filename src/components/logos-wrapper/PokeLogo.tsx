import React from "react";
import styled from "styled-components";

import poke_logo from "../../assets/poke_logo.png";

const ImageWrapper = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const PokeLogo = () => {
  return (
    <ImageWrapper>
      <StyledImg src={poke_logo} alt="Pokemon Logo" />
    </ImageWrapper>
  );
};

export default PokeLogo;
