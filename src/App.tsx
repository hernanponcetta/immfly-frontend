import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import usePokemonList from "./custom-hooks/usePokemonList";
import urlParse from "./utils/urlParse";

import { Main, Container, TopWrapper } from "./components/commons";
import LogosWrapper from "./components/logos-wrapper/LogosWrapper";
import PokemonsWrapper from "./components/pokemons-wrapper/PokemonsWrapper";
import PokemonThumbail from "./components/pokemon-thumbail/PokemonThumbail";
import PokemonCard from "./components/pokemon-card/PokemonCard";

const App = () => {
  const pokemonsList = usePokemonList();

  return (
    <Main>
      <Router>
        <Container>
          <Switch>
            {pokemonsList.status === "loaded" &&
              pokemonsList.data?.results.map((pokemon) => (
                <Route
                  key={urlParse(pokemon.url)}
                  path={`/pokemon/${pokemon.name}`}
                >
                  <PokemonCard url={pokemon.url} />
                </Route>
              ))}
            <Route path="/pokemon">
              <TopWrapper>
                <LogosWrapper />
              </TopWrapper>
              <PokemonsWrapper>
                {pokemonsList.status === "loading" && <div>Loading...</div>}
                {pokemonsList.status === "loaded" &&
                  pokemonsList.data?.results.map((pokemon) => (
                    <PokemonThumbail
                      key={urlParse(pokemon.url)}
                      name={pokemon.name}
                    />
                  ))}
              </PokemonsWrapper>
            </Route>
            <Route path="*">
              <Redirect to="/pokemon" />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Main>
  );
};

export default App;
