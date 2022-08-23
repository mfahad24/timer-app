import React, { ReactElement } from "react";

//icons
import Add from "@mui/icons-material/Add";
import Edit from "@mui/icons-material/ModeEditOutlined";
import Accept from "@mui/icons-material/CheckOutlined";

//styles
import styles from "./TimerActions.module.css";

interface TimerActionsProps {
  setNewTimerParametersPopup: Function;
  setEditTimers: Function;
  editTimers: boolean;
}

const TimerActions: React.FC<TimerActionsProps> = ({
  setNewTimerParametersPopup,
  setEditTimers,
  editTimers,
}): ReactElement => {
  return (
    <div className={styles.container}>
      {editTimers === false && (
        <div
          data-testid="all-timers-edit-btn"
          role="button"
          className={styles.edit}
          title="Edit timers"
          onClick={() => {
            setEditTimers(true);
          }}
        >
          <Edit fontSize="small" />
        </div>
      )}
      {editTimers === true && (
        <div
          data-testid="all-timers-accept-btn"
          role="button"
          className={styles.accept}
          title="Edit timers"
          onClick={() => {
            setEditTimers(false);
          }}
        >
          <Accept fontSize="small" />
        </div>
      )}

      <div
        data-testid="add-timer-btn"
        role="button"
        className={`${styles.add} ${
          editTimers === true ? `${styles.editMode}` : ""
        }`}
        title="Add new timer"
        onClick={() => {
          setNewTimerParametersPopup(true);
        }}
      >
        <Add fontSize="small" role="button" />
      </div>
    </div>
  );
};

export default TimerActions;
