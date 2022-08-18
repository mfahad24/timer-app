import React, { ReactElement } from "react";
import SingleTimer from "../SingleTimer/SingleTimer.tsx";
import styles from "./TimerContainer.module.css";
import Hourglass from "@mui/icons-material/HourglassEmptyOutlined";
import allTimers from "../../data/AllTimers";

const TimerContainer: React.FC = (): ReactElement => {
  return (
    <>
      <div className={styles.container}>
        {allTimers.length === 0 && (
          <div className={styles.noTimers}>
            <Hourglass fontSize="large" />
            <h2>You don't have any timers</h2>
            <span>Select "+" below to add a new timer.</span>
          </div>
        )}
        {allTimers.map((timer: Object) => (
          <SingleTimer timer={timer} />
        ))}
      </div>
    </>
  );
};

export default TimerContainer;
