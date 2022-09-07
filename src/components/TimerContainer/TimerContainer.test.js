import React from "react";
import { render, screen } from "@testing-library/react";
import TimerContainer from "../TimerContainer/TimerContainer";

test("the app should render 3 timers to start", () => {
  render(<TimerContainer />);
  const allTimers = screen.queryAllByTestId("single-timer-container");
  expect(allTimers).toHaveLength(3);
});
