import React, { ReactElement, useEffect, useState, useCallback } from "react";
//@ts-ignore
import Axios from "axios";
//@ts-ignore
import SingleTimerInnerCircle from "../SingleTimerInnerCircle/SingleTimeInnerCircle.tsx";

//icons
import FullView from "@mui/icons-material/OpenInFullOutlined";
import MiniView from "@mui/icons-material/LaunchOutlined";
import Play from "@mui/icons-material/PlayCircleFilledOutlined";
import Restart from "@mui/icons-material/RestartAltOutlined";
import Trash from "@mui/icons-material/DeleteOutlineSharp";
import Minimize from "@mui/icons-material/CloseFullscreen";

//styles
//@ts-ignore
import styles from "./SingleTimer.module.css";

interface SingleTimerProps {
  singleTimer: Object;
  editTimers: boolean;
  currentIndex: Number;
  allTimers: Array<Object>;
  setAllTimers: Function;
  setFullView: Function;
  fullView: boolean;
}

const SingleTimer: React.FC<SingleTimerProps> = ({
  singleTimer,
  editTimers,
  currentIndex,
  allTimers,
  setAllTimers,
  setFullView,
  fullView,
}): ReactElement => {
  const [expandedTimer, setExpandedTimer] = useState<Number | null>(null);

  const removeTimer = () => {
    setAllTimers(allTimers.filter((timer) => timer["id"] !== currentIndex));
    Axios.delete(`http://localhost:3001/api/delete/${currentIndex}`).catch((err) => console.log(err))
  };

  const expandTimer = () => {
    setExpandedTimer(currentIndex);
    setFullView(true);
  };

  return (
    <>
      <div
        className={`${styles.container} ${
          fullView === true && singleTimer["id"] === expandedTimer
            ? `${styles.containerExpanded}`
            : ""
        }`}
        data-testid="single-timer-container"
        title="Edit timer"
        id={singleTimer["id"]}
      >
        <div className={styles.singleTimerTop}>
          <div
            className={`${styles.singleTimerTitle} ${
              editTimers === true ? `${styles.editMode}` : ""
            } ${fullView === true ? `${styles.hidden}` : ""}`}
            data-testid="single-timer-title"
          >
            {singleTimer?.["title"].length < 20 ? singleTimer?.["title"] : singleTimer?.["title"].substring(0, 20) + '...'}
          </div>
          <div>
            {editTimers === false && fullView === false && (
              <>
                <FullView
                  className={styles.singleTimerFullView}
                  data-testid="single-timer-full-view"
                  fontSize="medium"
                  onClick={() => expandTimer()}
                />
                <MiniView
                  className={styles.singleTimerMiniView}
                  data-testid="single-timer-mini-view"
                  fontSize="medium"
                />
              </>
            )}
            {fullView === true && (
              <Minimize
                className={styles.singleTimerMinimize}
                data-testid="single-timer-minimize"
                fontSize="medium"
                onClick={() => setFullView(false)}
              />
            )}
            {editTimers === true && (
              <Trash
                className={styles.singleTimerTrash}
                data-testid="single-timer-trash"
                fontSize="medium"
                onClick={() => removeTimer()}
              />
            )}
          </div>
        </div>
        <div
          className={`${styles.innerCircleContainer} ${
            editTimers === true ? `${styles.editMode}` : ""
          }`}
        >
          <SingleTimerInnerCircle countDownTime={singleTimer.countDownTime} />
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
