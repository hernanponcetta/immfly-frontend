import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import PokemonThumbail from "../PokemonThumbail";

test("shows Pokemon name", () => {
  render(
    <Router>
      <PokemonThumbail name="bulbasaur" />
      );
    </Router>
  );
  const name = screen.getByText("bulbasaur");
  expect(name).toBeInTheDocument();
});

test("shows Pokemon img", () => {
  render(
    <Router>
      <PokemonThumbail name="bulbasaur" />
      );
    </Router>
  );
  const altText = screen.getByAltText("bulbasaur");
  expect(altText).toBeInTheDocument();
});
