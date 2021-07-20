import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import usePokemonList from "./custom-hooks/usePokemonList";
import urlParse from "./utils/urlParse";

import { Main, Container, TopWrapper } from "./components/commons/commons";
import PokeLogo from "./components/PokeLogo";
import IfyLogo from "./components/IfyLogo";
import PokemonsWrapper from "./components/PokemonsWrapper";
import PokemonThumbail from "./components/PokemonThumbail";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const pokemonsList = usePokemonList();

  return (
    <Main>
      <Router>
        <Container>
          <Switch>
            {pokemonsList.status === "loaded" &&
              pokemonsList.data?.results.map((pokemon) => (
                <Route path={`/pokemon/${pokemon.name}`}>
                  <PokemonCard url={pokemon.url} />
                </Route>
              ))}
            <Route path="/pokemon">
              <TopWrapper>
                <IfyLogo />
                <PokeLogo />
              </TopWrapper>
              <PokemonsWrapper>
                {pokemonsList.status === "loading" && <div>Loading...</div>}
                {pokemonsList.status === "loaded" &&
                  pokemonsList.data?.results.map((pokemon) => (
                    <PokemonThumbail
                      key={urlParse(pokemon.url)}
                      src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name}.gif`}
                      name={pokemon.name}
                    />
                  ))}
              </PokemonsWrapper>
            </Route>
            <Route path="/">
              <Redirect to="/pokemon" />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Main>
  );
};

export default App;
