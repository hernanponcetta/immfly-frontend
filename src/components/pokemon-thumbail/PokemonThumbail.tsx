import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ImageWrapper, Label } from "../commons";

const StyledDiv = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 230px;
  justify-content: space-between;
  padding: 1rem;
  transition: 0.3s;
  &:hover {
    background-color: #e2e2e2;
  }
`;

const StyledImg = styled.img``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PokemonThumbail = ({ name }: { name: string }) => {
  return (
    <StyledLink to={`/pokemon/${name}`}>
      <StyledDiv>
        <ImageWrapper>
          <StyledImg
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
            alt={name}
          />
        </ImageWrapper>
        <Label>{name}</Label>
      </StyledDiv>
    </StyledLink>
  );
};

export default PokemonThumbail;
