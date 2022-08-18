import React from "react";
import { render, screen } from "@testing-library/react";
import TimerActions from "./TimerActions";

test("edit all timers and add time icons are both rendered", () => {
  render(<TimerActions />);
  const allTimersEditIcon = screen.getByTestId("all-timers-edit-icon");
  const addTimerIcon = screen.getByTestId("add-timer-icon");
  expect(allTimersEditIcon).toBeInTheDocument();
  expect(addTimerIcon).toBeInTheDocument();
});
