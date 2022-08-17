import React, { ReactElement } from "react";
import SingleTimer from "../SingleTimer/SingleTimer.tsx";
import timerContainerStyles from "./TimerContainer.module.css";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";

const TimerContainer: React.FC = (): ReactElement => {
  return (
    <>
      <div className={timerContainerStyles.container}>
        {/* <div className={timerContainerStyles.noTimers}>
          <HourglassEmptyOutlinedIcon fontSize="large"/>
          <h2>You don't have any timers</h2>
          <span>Select "+" below to add a new timer.</span>
        </div> */}
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
        <SingleTimer />
      </div>
    </>
  );
};

export default TimerContainer;
