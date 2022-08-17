import React, { ReactElement } from "react";
import SingleTimer from "../SingleTimer/SingleTimer.tsx";
import timerContainerStyles from "./TimerContainer.module.css";

const TimerContainer: React.FC = (): ReactElement => {
  return (
    <>
      <div className={timerContainerStyles.container}>
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
