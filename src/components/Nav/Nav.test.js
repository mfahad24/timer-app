import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

test("all nav buttons are rendered", () => {
  render(<Nav />);
  const clock = screen.getByText("Clock");
  const focusSessions = screen.getByText("Focus sessions");
  const timer = screen.getByText("Timer");
  const alarm = screen.getByText("Alarm");
  const stopwatch = screen.getByText("Stopwatch");
  const worldClock = screen.getByText("World clock");
  const signIn = screen.getByText("Sign in");
  const settings = screen.getByText("Settings");

  expect(clock).toBeInTheDocument();
  expect(focusSessions).toBeInTheDocument();
  expect(timer).toBeInTheDocument();
  expect(alarm).toBeInTheDocument();
  expect(stopwatch).toBeInTheDocument();
  expect(worldClock).toBeInTheDocument();
  expect(signIn).toBeInTheDocument();
  expect(settings).toBeInTheDocument();
});

test("'Timer' menu item should have selected class on it", () => {
  render(<Nav />);
  const selectedElement = screen.getByTestId("selected-nav-item");
  expect(selectedElement).toHaveClass("selected");
});
