import React from "react";
import styled from "styled-components";
import usePokemonData from "../../custom-hooks/usePokemonData";
import { Link } from "react-router-dom";

import { ImageWrapper, Label } from "../commons/commons";

interface PokemonCardProps {
  url: string;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-sizing: border-box;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  border: 1px solid black;
  margin-top: 3rem;
  padding: 2rem 1.5rem;
`;

const LabelWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px 0;
`;

const Ul = styled.ul`
  margin: 0;
`;

const LinkContainer = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  padding: 0.5rem 0;
`;

const StyledField = styled.div`
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PokemonCard = ({ url }: PokemonCardProps) => {
  const pokemonData = usePokemonData(url);

  return (
    <StyledDiv>
      <LinkContainer>
        <StyledLink to="/pokemon">X</StyledLink>
      </LinkContainer>
      <ImageWrapper>
        <img
          alt={`${pokemonData.data?.name}`}
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonData.data?.name}.gif`}
        ></img>
      </ImageWrapper>
      <div>
        <Label>{pokemonData.data?.name}</Label>
        <LabelWrapper>
          <StyledField>{`ID: ${pokemonData.data?.id}`}</StyledField>
        </LabelWrapper>
        <LabelWrapper>
          <StyledField>Types:</StyledField>
          <Ul>
            {pokemonData.data?.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </Ul>
        </LabelWrapper>
        <LabelWrapper>
          <StyledField>{`Heigth: ${pokemonData.data?.height}`}</StyledField>
        </LabelWrapper>
        <LabelWrapper>
          <StyledField>Abilities:</StyledField>
          <Ul>
            {pokemonData.data?.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </Ul>
        </LabelWrapper>
      </div>
    </StyledDiv>
  );
};

export default PokemonCard;
