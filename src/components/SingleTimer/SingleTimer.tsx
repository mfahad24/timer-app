import React, { ReactElement } from "react";
import singleTimerStyles from "./SingleTimer.module.css";

const SingleTimer: React.FC = (): ReactElement => {
  return (
    <>
      <div className={singleTimerStyles.container} title="Edit timer">
        <div className={singleTimerStyles.singleTimer}>Test</div>
      </div>
    </>
  );
};

export default SingleTimer;
