import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
`;

interface PokemonsWrapperProps {
  children: React.ReactNode;
}

const PokemonsWrapper = ({ children }: PokemonsWrapperProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default PokemonsWrapper;
