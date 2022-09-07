import React from "react";
import { render, screen } from "@testing-library/react";
import TimerActions from "./TimerActions";

test("edit all timers button rendered", () => {
  render(<TimerActions editTimers={false} />);
  const allTimersEditBtn = screen.getByTestId("all-timers-edit-btn");
  expect(allTimersEditBtn).toBeInTheDocument();
});

test("add timer button rendered", () => {
  render(<TimerActions />);
  const addTimerBtn = screen.getByTestId("add-timer-btn");
  expect(addTimerBtn).toBeInTheDocument();
});

test("accept all timers button rendered", () => {
  render(<TimerActions editTimers={true} />);
  const acceptAllTimersBtn = screen.getByTestId("all-timers-accept-btn");
  expect(acceptAllTimersBtn).toBeInTheDocument();
});

test("accept all timers button rendered", () => {
  render(<TimerActions editTimers={true} />);
  const acceptAllTimersBtn = screen.getByTestId("all-timers-accept-btn");
  expect(acceptAllTimersBtn).toBeInTheDocument();
});
