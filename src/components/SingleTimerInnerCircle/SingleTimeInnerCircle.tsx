import React, { ReactElement, useState, useEffect } from "react";

//styles
//@ts-ignore
import styles from "./SingleTimerInnerCircle.module.css";

//material ui
import CircularProgress, {
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface SingleTimerInnerCircleProps {
  countDownTime: String;
}

const SingleTimerInnerCircle: React.FC<SingleTimerInnerCircleProps> = ({
  countDownTime,
}): ReactElement => {
  const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress <= 1 ? 1000 : prevProgress - 1
  //     );
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <>
      <div className={styles.container} title="Edit timer">
        <div className={styles.singleTimerTime}>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress variant="determinate" />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                component="div"
                color="text.primary"
                fontSize="35px"
              >
                {countDownTime}
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SingleTimerInnerCircle;
