import React, { ReactElement } from "react";
import styles from "./TimerActions.module.css";
import Add from "@mui/icons-material/Add";
import Edit from "@mui/icons-material/ModeEditOutlined";

const TimerActions: React.FC = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div
        data-testid="all-timers-edit-icon"
        className={styles.edit}
        title="Edit timers"
      >
        <Edit fontSize="small" />
      </div>
      <div
        data-testid="add-timer-icon"
        className={styles.add}
        title="Add new timer"
      >
        <Add fontSize="small" />
      </div>
    </div>
  );
};

export default TimerActions;
