import React, { ReactElement } from "react";

//material ui
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import EditText from "@mui/icons-material/EditOutlined";
import Save from "@mui/icons-material/SaveOutlined";
import Close from "@mui/icons-material/CloseOutlined";

//styles
import styles from "./NewTimerParametersPopup.module.css";

interface NewTimerParametersPopupProps {
  setNewTimerParametersPopup: Function;
}

const NewTimerParametersPopup: React.FC<NewTimerParametersPopupProps> = ({
  setNewTimerParametersPopup,
}): ReactElement => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.newTimerParametersPopup}>
          <div className={styles.title}>Add new timer</div>
          <div></div>
          <div className={styles.timerNameInputContainer}>
            <EditText className={styles.timerNameInputIcon} fontSize="medium" />
            <TextField
              hiddenLabel
              className={styles.timerNameInput}
              id="filled-hidden-label-normal"
              defaultValue="Timer 1"
              variant="filled"
              size="small"
            />
          </div>
          <hr />
          <div className={styles.timerButtonsContainer}>
            <Button
              className={styles.save}
              variant="contained"
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
