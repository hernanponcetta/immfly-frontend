import React from "react";
import styled from "styled-components";

import ify_logo from "../../assets/ify_logo.png";

const ImageWrapper = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const IfyLogo = () => {
  return (
    <ImageWrapper>
      <img width="50px" src={ify_logo} alt="Immfly logo" />
    </ImageWrapper>
  );
};

export default IfyLogo;
