import React from "react";
import styled from "styled-components";

import { Label } from "../commons";

const StyledDiv = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  margin-top: 2rem;
  margin-bottom: 6rem;
  padding: 2rem;
  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledLabel = styled(Label)`
  font-weight: 400;
  font-size: 1.25rem;
  padding-bottom: 0;
`;

interface PokemonsWrapperProps {
  children: React.ReactNode;
}

const PokemonsWrapper = ({ children }: PokemonsWrapperProps) => {
  return (
    <div>
      <StyledLabel>Generation 1</StyledLabel>
      <Label style={{ paddingTop: "0.75rem" }}>{`151 Pokemons`}</Label>
      <StyledDiv>{children}</StyledDiv>;
    </div>
  );
};

export default PokemonsWrapper;
