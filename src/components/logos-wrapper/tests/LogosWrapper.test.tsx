import React from "react";
import { render, screen } from "@testing-library/react";
import LogosWrapper from "../LogosWrapper";

test("shows Pokemon logo", () => {
  render(<LogosWrapper />);
  const logo = screen.getByAltText("Pokemon Logo");
  expect(logo).toBeInTheDocument();
});

test("shows Immfly logo", () => {
  render(<LogosWrapper />);
  const logo = screen.getByAltText("Immfly logo");
  expect(logo).toBeInTheDocument();
});
