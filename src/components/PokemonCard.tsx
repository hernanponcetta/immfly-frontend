import React from "react";
import styled from "styled-components";
import usePokemonData from "../custom-hooks/usePokemonData";
import { Link } from "react-router-dom";

import { ImageWrapper, Label } from "./commons/commons";

interface PokemonCardProps {
  url: string;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  box-sizing: border-box;
  height: 480px;
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
  margin-top: 0.5rem;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
  margin-left: auto;
`;

const StyledField = styled.div`
  box-sizing: border-box;
`;

const PokemonCard = ({ url }: PokemonCardProps) => {
  const pokemonData = usePokemonData(url);

  return (
    <StyledDiv>
      <ButtonContainer>
        <Link to="/pokemon">X</Link>
      </ButtonContainer>
      <ImageWrapper>
        <img
          src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemonData.data?.name}.gif`}
        ></img>
      </ImageWrapper>
      <Label>{pokemonData.data?.name}</Label>
      <LabelWrapper>
        <StyledField>{`ID: ${pokemonData.data?.id}`}</StyledField>
      </LabelWrapper>
      <LabelWrapper>
        <StyledField>Types:</StyledField>
        <Ul>
          {pokemonData.data?.types.map((type) => (
            <li>{type.type.name}</li>
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
            <li>{ability.ability.name}</li>
          ))}
        </Ul>
      </LabelWrapper>
    </StyledDiv>
  );
};

export default PokemonCard;
