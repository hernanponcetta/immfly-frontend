import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PokemonCard from "../PokemonCard";

test("shows Pokemon name", async () => {
  render(
    <Router>
      <PokemonCard url={"https://pokeapi.co/api/v2/pokemon/1/"} />
    </Router>
  );

  const name = await screen.findByText("bulbasaur");
  expect(name).toBeInTheDocument();
});

test("shows Pokemon id", async () => {
  render(
    <Router>
      <PokemonCard url={"https://pokeapi.co/api/v2/pokemon/1/"} />
    </Router>
  );

  const id = await screen.findByText("ID: 1");
  expect(id).toBeInTheDocument();
});

test("shows Pokemon id", async () => {
  render(
    <Router>
      <PokemonCard url={"https://pokeapi.co/api/v2/pokemon/1/"} />
    </Router>
  );

  const id = await screen.findByText("ID: 1");
  expect(id).toBeInTheDocument();
});

test("shows Pokemon types", async () => {
  render(
    <Router>
      <PokemonCard url={"https://pokeapi.co/api/v2/pokemon/1/"} />
    </Router>
  );

  const id = await screen.findByText("Types:");
  expect(id).toBeInTheDocument();
});
