import React, { ReactElement } from "react";
import timerActionStyles from "./TimerActions.module.css";

const TimerActions: React.FC = (): ReactElement => {
  return (
    <div className={timerActionStyles.container}>
      <div className={timerActionStyles.edit} title="Edit timers">
        &#x270E;
      </div>
      <div className={timerActionStyles.add} title="Add new timer">
        &#43;
      </div>
    </div>
  );
};

export default TimerActions;
