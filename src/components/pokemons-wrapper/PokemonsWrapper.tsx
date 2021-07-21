import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface PokemonsWrapperProps {
  children: React.ReactNode;
}

const PokemonsWrapper = ({ children }: PokemonsWrapperProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default PokemonsWrapper;
