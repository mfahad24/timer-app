import React, { ReactElement, useEffect, useState } from "react";

//components
//@ts-ignore
import SingleTimer from "../SingleTimer/SingleTimer.tsx";
//@ts-ignore
import TimerActions from "../TimerActions/TimerActions.tsx";
//@ts-ignore
import NewTimerParametersPopup from "../NewTimerParametersPopup/NewTimerParametersPopup.tsx";
//@ts-ignore
import Nav from "../Nav/Nav.tsx";

//icons
import Hourglass from "@mui/icons-material/HourglassEmptyOutlined";

//data
import allTimersData from "../../data/AllTimersData.json";

//styles
//@ts-ignore
import styles from "./TimerContainer.module.css";

const TimerContainer: React.FC = (): ReactElement => {
  const [allTimers, setAllTimers] = useState<any>([]);
  const [newTimerParametersPopup, setNewTimerParametersPopup] =
    useState<boolean>(false);
  const [editTimers, setEditTimers] = useState<boolean>(false);
  const [fullView, setFullView] = useState<boolean>(false);

  useEffect(() => {
    allTimersData.forEach((timer) => {
      setAllTimers((prevTimer: any) => [...prevTimer, timer]);
    });
  }, []);

  useEffect(() => {
    if (allTimers.length === 0) {
      setEditTimers(false);
    }
  }, [allTimers]);

  return (
    <>
      <Nav fullView={fullView} />
      <div
        className={`${styles.container} ${
          fullView === true ? `${styles.containerExpanded}` : ""
        }`}
      >
        {allTimers.length === 0 && (
          <div className={styles.noTimers}>
            <Hourglass fontSize="large" className={styles.noTimersIcon} />
            <h2 className={styles.noTimerMessage}>You don't have any timers</h2>
            <span className={styles.noTimerSubMessage}>
              Select "+" below to add a new timer.
            </span>
          </div>
        )}
        {allTimers.map((singleTimer: Object, index: Number) => (
          <SingleTimer
            singleTimer={singleTimer}
            key={`single-timer${index}`}
            editTimers={editTimers}
            currentIndex={singleTimer["id"]}
            setAllTimers={setAllTimers}
            allTimers={allTimers}
            setFullView={setFullView}
            fullView={fullView}
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
        allTimers={allTimers}
        fullView={fullView}
      />
    </>
  );
};

export default TimerContainer;
