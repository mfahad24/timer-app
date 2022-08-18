import React, { ReactElement } from "react";
import styles from "./SingleTimer.module.css";
import SingleTimerInnerCircle from "../SingleTimerInnerCircle/SingleTimeInnerCircle.tsx";
import FullView from "@mui/icons-material/OpenInFullOutlined";
import MiniView from "@mui/icons-material/LaunchOutlined";
import Play from "@mui/icons-material/PlayCircleFilledOutlined";
import Restart from "@mui/icons-material/RestartAltOutlined";

interface SingleTimerProps {
  timer: Object;
  title: String;
}

const SingleTimer: React.FC<SingleTimerProps> = ({ timer }): ReactElement => {
  console.log(timer);
  return (
    <>
      <div className={styles.container} title="Edit timer">
        <div className={styles.singleTimerTop}>
          <div className={styles.singleTimerTitle}>{timer.title}</div>
          <div>
            <FullView fontSize="small" />
            <MiniView fontSize="small" />
          </div>
        </div>
        <div>
          <SingleTimerInnerCircle />
        </div>
        <div className={styles.singleTimerBottom}>
          <Play fontSize="large" style={{ fill: "#1869a6" }} />
          <Restart fontSize="large" />
        </div>
      </div>
    </>
  );
};

export default SingleTimer;
