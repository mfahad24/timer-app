import React, { ReactElement } from "react";
import timerActionStyles from "./TimerActions.module.css";
import AddIcon from "@mui/icons-material/Add";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

const TimerActions: React.FC = (): ReactElement => {
  return (
    <div className={timerActionStyles.container}>
      <div className={timerActionStyles.edit} title="Edit timers">
        <ModeEditOutlinedIcon fontSize="small" />
      </div>
      <div className={timerActionStyles.add} title="Add new timer">
        <AddIcon fontSize="small" />
      </div>
    </div>
  );
};

export default TimerActions;
