import React, { ReactElement } from "react";

//styles
import styles from "./SingleTimerInnerCircle.module.css";

interface SingleTimerInnerCircleProps {
  time: String;
}

const SingleTimerInnerCircle: React.FC<SingleTimerInnerCircleProps> = ({
  time,
}): ReactElement => {
  return (
    <>
      <div className={styles.container} title="Edit timer">
        <div className={styles.singleTimerTime}>{time}</div>
      </div>
    </>
  );
};

export default SingleTimerInnerCircle;
