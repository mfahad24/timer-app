import React, { ReactElement } from "react";

//styles
//@ts-ignore
import styles from "./CountdownTimerSelector.module.css";

//material ui
import ArrowUp from "@mui/icons-material/KeyboardArrowUp";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import TextField from "@mui/material/TextField";

interface CountdownTimerSelector {
    hour: number,
    minute: number,
    second: number,
    setHour: Function,
    setMinute: Function,
    setSecond: Function,
    setAllTimers: Function
  }

const CountdownTimerSelector: React.FC<CountdownTimerSelector> = ({
  hour,
  minute,
  second,
  setHour,
  setMinute,
  setSecond,
}): ReactElement => {
  const increaseValue = (timeProperty: String) => {
    if (timeProperty === "hour" && hour <= 98)
      setHour((prev: number) => (prev += 1));
    if (timeProperty === "minute" && minute <= 58)
      setMinute((prev: number) => (prev += 1));
    if (timeProperty === "second" && second <= 58)
      setSecond((prev: number) => (prev += 1));
  };

  const decreaseValue = (timeProperty: String) => {
    if (timeProperty === "hour" && hour >= 1)
      setHour((prev: number) => (prev -= 1));
    if (timeProperty === "minute" && minute >= 1)
      setMinute((prev: number) => (prev -= 1));
    if (timeProperty === "second" && second >= 1)
      setSecond((prev: number) => (prev -= 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.increaseArrowsContainer}>
        <ArrowUp fontSize="large" onClick={() => increaseValue("hour")} />
        <ArrowUp fontSize="large" onClick={() => increaseValue("minute")} />
        <ArrowUp fontSize="large" onClick={() => increaseValue("second")} />
      </div>
      <div className={styles.selectTimeContainer}>
        <TextField
          id="outlined-number"
          label="Hour"
          type="number"
          value={hour}
        />
        <TextField
          id="outlined-number"
          label="Minute"
          type="number"
          value={minute}
        />
        <TextField
          id="outlined-number"
          label="Seconds"
          type="number"
          value={second}
        />
      </div>
      <div className={styles.decreaseArrowsContainer}>
        <ArrowDown fontSize="large" onClick={() => decreaseValue("hour")} />
        <ArrowDown fontSize="large" onClick={() => decreaseValue("minute")} />
        <ArrowDown fontSize="large" onClick={() => decreaseValue("second")} />
      </div>
    </div>
  );
};

export default CountdownTimerSelector;
