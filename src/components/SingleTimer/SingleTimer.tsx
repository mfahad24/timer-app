import React, { ReactElement } from "react";
//@ts-ignore
import SingleTimerInnerCircle from "../SingleTimerInnerCircle/SingleTimeInnerCircle.tsx";

//icons
import FullView from "@mui/icons-material/OpenInFullOutlined";
import MiniView from "@mui/icons-material/LaunchOutlined";
import Play from "@mui/icons-material/PlayCircleFilledOutlined";
import Restart from "@mui/icons-material/RestartAltOutlined";
import Trash from "@mui/icons-material/DeleteOutlineSharp";

//styles
import styles from "./SingleTimer.module.css";

interface SingleTimerProps {
  timer: Object;
  editTimers: boolean;
}

const SingleTimer: React.FC<SingleTimerProps> = ({
  timer,
  editTimers,
}): ReactElement => {
  return (
    <>
      <div className={styles.container} title="Edit timer">
        <div className={styles.singleTimerTop}>
          <div
            className={`${styles.singleTimerTitle} ${
              editTimers === true ? `${styles.editMode}` : ""
            }`}
            data-testid="single-timer-title"
          >
            {timer?.["title"]}
          </div>
          <div>
            {editTimers === false && (
              <>
                <FullView
                  className={styles.singleTimerFullView}
                  data-testid="single-timer-full-view"
                  fontSize="medium"
                />
                <MiniView
                  className={styles.singleTimerMiniView}
                  data-testid="single-timer-mini-view"
                  fontSize="medium"
                />
              </>
            )}
            {editTimers === true && (
              <Trash
                className={styles.singleTimerTrash}
                data-testid="single-timer-trash"
                fontSize="medium"
              />
            )}
          </div>
        </div>
        <div
          className={`${styles.innerCircleContainer} ${
            editTimers === true ? `${styles.editMode}` : ""
          }`}
        >
          <SingleTimerInnerCircle time={timer?.["time"]} />
        </div>
        <div
          className={`${styles.singleTimerBottom} ${
            editTimers === true ? `${styles.editMode}` : ""
          }`}
        >
          <Play
            className={styles.singleTimerPlay}
            fontSize="large"
            data-testid="single-timer-play"
          />
          <Restart
            className={styles.singleTimerRestart}
            fontSize="large"
            data-testid="single-timer-restart"
          />
        </div>
      </div>
    </>
  );
};

export default SingleTimer;
