import React, { ReactElement, useEffect, useState } from "react";

//components
//@ts-ignore
import SingleTimer from "../SingleTimer/SingleTimer.tsx";
//@ts-ignore
import TimerActions from "../TimerActions/TimerActions.tsx";
//@ts-ignore
import NewTimerParametersPopup from "../NewTimerParametersPopup/NewTimerParametersPopup.tsx";

//icons
import Hourglass from "@mui/icons-material/HourglassEmptyOutlined";

//data
import allTimersData from "../../data/AllTimersData.json";

//styles
import styles from "./TimerContainer.module.css";

const TimerContainer: React.FC = (): ReactElement => {
  const [allTimers, setAllTimers] = useState<any>([]);
  const [newTimerParametersPopup, setNewTimerParametersPopup] =
    useState<boolean>(false);
  const [editTimers, setEditTimers] = useState<boolean>(false);

  useEffect(() => {
    allTimersData.forEach((timer) => {
      setAllTimers((prevTimer: any) => [...prevTimer, timer]);
    });
  }, []);
  return (
    <>
      <div className={styles.container}>
        {allTimers.length === 0 && (
          <div className={styles.noTimers}>
            <Hourglass fontSize="large" />
            <h2>You don't have any timers</h2>
            <span>Select "+" below to add a new timer.</span>
          </div>
        )}
        {allTimers.map((timer: Object, index: Number) => (
          <SingleTimer
            timer={timer}
            key={`single-timer${index}`}
            editTimers={editTimers}
          />
        ))}
      </div>
      {newTimerParametersPopup === true && (
        <NewTimerParametersPopup
          setNewTimerParametersPopup={setNewTimerParametersPopup}
        />
      )}
      <TimerActions
        setNewTimerParametersPopup={setNewTimerParametersPopup}
        setEditTimers={setEditTimers}
        editTimers={editTimers}
      />
    </>
  );
};

export default TimerContainer;
