import React, { ReactElement } from "react";
import styles from "./SingleTimerInnerCircle.module.css";

interface SingleTimerInnerCircleProps {}

const SingleTimerInnerCircle: React.FC<
  SingleTimerInnerCircleProps
> = (): ReactElement => {
  return (
    <>
      <div className={styles.container} title="Edit timer">
        <div className={styles.singleTimerTime}>05:00:03</div>
      </div>
    </>
  );
};

export default SingleTimerInnerCircle;
