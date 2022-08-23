import React from "react";
import { render, screen } from "@testing-library/react";
import SingleTimer from "./SingleTimer";

test("timer text, play button and restart button rendered", () => {
  render(<SingleTimer />);
  const timerText = screen.getByTestId("single-timer-title");
  const playBtn = screen.getByTestId("single-timer-play");
  const restartBtn = screen.getByTestId("single-timer-restart");

  expect(timerText).toBeInTheDocument();
  expect(playBtn).toBeInTheDocument();
  expect(restartBtn).toBeInTheDocument();
});

test("full view and mini view buttons rendered", () => {
  render(<SingleTimer editTimers={false} />);
  const fullView = screen.getByTestId("single-timer-full-view");
  const miniView = screen.getByTestId("single-timer-mini-view");

  expect(fullView).toBeInTheDocument();
  expect(miniView).toBeInTheDocument();
});

test("trash button rendered", () => {
  render(<SingleTimer editTimers={true} />);
  const trashBtn = screen.getByTestId("single-timer-trash");
  expect(trashBtn).toBeInTheDocument();
});
