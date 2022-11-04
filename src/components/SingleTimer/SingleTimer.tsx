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
import Pause from "@mui/icons-material/PauseCircle";

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
  //state for inner number timer
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(0);
  //state for outer circular progress
  const [outOf100, setOutOf100] = useState(100);
  const [showEndTime, setShowEndTime] = useState(false);

  const startCountDownTimer = () => {
    setShowEndTime(true);
    const timer = setInterval(() => {
      setTotalTimeInSeconds((prevProgress) =>
        prevProgress <= 1 ? 0 : prevProgress - 1
      );
      setOutOf100(
        //@ts-ignore
        (prevProgress) =>
          prevProgress > 1 && prevProgress - 100 / totalTimeInSeconds
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  };

  useEffect(() => {
    let splitTime = singleTimer.countDownTime.split(":");
    let seconds = +splitTime[0] * 60 * 60 + +splitTime[1] * 60 + +splitTime[2];
    setTotalTimeInSeconds(seconds);
  }, []);

  useEffect(() => {
    if (outOf100 === 0) {
      setShowEndTime(false);
    }
  }, [outOf100]);

  const removeTimer = () => {
    setAllTimers(allTimers.filter((timer) => timer["id"] !== currentIndex));
    Axios.delete(`http://localhost:3001/api/delete/${currentIndex}`).catch(
      (err) => console.log(err)
    );
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
            {singleTimer?.["title"].length < 20
              ? singleTimer?.["title"]
              : singleTimer?.["title"].substring(0, 20) + "..."}
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
                {/* feature not available on browser? */}
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
          <SingleTimerInnerCircle
            totalTimeInSeconds={totalTimeInSeconds}
            outOf100={outOf100}
            showEndTime={showEndTime}
          />
        </div>
        <div
          className={`${styles.singleTimerBottom} ${
            editTimers === true ? `${styles.editMode}` : ""
          }`}
        >
          {showEndTime === false ? (
            <Play
              className={styles.singleTimerPlay}
              fontSize="large"
              data-testid="single-timer-play"
              onClick={() => startCountDownTimer()}
            />
          ) : (
            <Pause
              className={styles.singleTimerPause}
              fontSize="large"
              data-testid="single-timer-pause"
            />
          )}
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
