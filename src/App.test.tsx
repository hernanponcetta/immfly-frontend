import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main component", () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toBeInTheDocument();
});

test("main component has the correct background color", () => {
  render(<App />);
  const mainElement = screen.getByRole("main");
  expect(mainElement).toHaveStyle({ backgroundColor: "#f3f1f1" });
});
