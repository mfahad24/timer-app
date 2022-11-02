import React, { ReactElement, useState } from "react";
//@ts-ignore
import Axios from "axios";

//components
//@ts-ignore
import CountdownTimerSelector from "../CountdownTimerSelector/CountdownTimerSelector.tsx";

//material ui
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import EditText from "@mui/icons-material/EditOutlined";
import Save from "@mui/icons-material/SaveOutlined";
import Close from "@mui/icons-material/CloseOutlined";

//styles
//@ts-ignore
import styles from "./NewTimerParametersPopup.module.css";

interface NewTimerParametersPopupProps {
  setNewTimerParametersPopup: Function,
  allTimers: Array<Object>,
  setAllTimers: Function
}

const NewTimerParametersPopup: React.FC<NewTimerParametersPopupProps> = ({
  setNewTimerParametersPopup,
  allTimers,
  setAllTimers
}): ReactElement => {
  const [newTimerTitle, setNewTimerTitle] = useState("");
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const saveAndAddTimer = () => {
    const newId = allTimers.length > 0 ? allTimers[allTimers.length - 1]["id"] + 1 : 1;
    const newTitle = newTimerTitle ? newTimerTitle : `Timer (${allTimers.length + 1})`;
    const newCountDownTime = `${hour < 10 ? "0" + hour : hour}:${
      minute < 10 ? "0" + minute : minute
    }:${second < 10 ? "0" + second : second}`;

      Axios.post("http://localhost:3001/api/post", {
        id: newId,
        title: newTitle,
        countDownTime: newCountDownTime
      })
        .then(() => console.log("successfully added new timer"))
        .catch((err) => console.log("unable to add a new timer", err));
      setAllTimers((prev: any) => [...prev, {id: newId, title: newTitle, countDownTime: newCountDownTime}])
      setNewTimerParametersPopup(false);
      setNewTimerTitle("");
      setHour(0);
      setMinute(0);
      setSecond(0);
  };

  return (
    <>
      <div
        className={styles.container}
        data-testid="new-timer-parameters-popup-container"
      >
        <div className={styles.newTimerParametersPopup}>
          <div className={styles.title}>Add new timer</div>
          <div className={styles.timerNameInputContainer}>
            <CountdownTimerSelector
              hour={hour}
              minute={minute}
              second={second}
              setHour={setHour}
              setMinute={setMinute}
              setSecond={setSecond}
            />
          </div>
          <div className={styles.timerNameInputContainer}>
            <EditText className={styles.timerNameInputIcon} fontSize="medium" />
            <TextField
              hiddenLabel
              className={styles.timerNameInput}
              id="filled-hidden-label-normal"
              defaultValue={`Timer (${allTimers.length + 1})`}
              variant="filled"
              size="small"
              onChange={(e) => setNewTimerTitle(e.target.value)}
            />
          </div>
          <hr />
          <div className={styles.timerButtonsContainer}>
            <Button
              className={styles.save}
              variant="contained"
              onClick={() => saveAndAddTimer()}
              startIcon={<Save />}
            >
              Save
            </Button>
            <Button
              className={styles.cancel}
              variant="outlined"
              startIcon={<Close />}
              onClick={() => setNewTimerParametersPopup(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTimerParametersPopup;
