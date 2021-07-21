import React from "react";
import styled from "styled-components";
import usePokemonData from "../../custom-hooks/usePokemonData";
import { Link } from "react-router-dom";

import { ImageWrapper, Label } from "../commons";

import {
  StyledDiv,
  LinkContainer,
  LabelWrapper,
  StyledField,
  Ul,
} from "./commons";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

interface PokemonCardProps {
  url: string;
}

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
