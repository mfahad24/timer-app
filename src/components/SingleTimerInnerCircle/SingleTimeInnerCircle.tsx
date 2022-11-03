import React, { ReactElement } from "react";

//styles
//@ts-ignore
import styles from "./SingleTimerInnerCircle.module.css";

//material ui
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface SingleTimerInnerCircleProps {
  totalTimeInSeconds: number;
  outOf100: number;
}

const SingleTimerInnerCircle: React.FC<SingleTimerInnerCircleProps> = ({
  totalTimeInSeconds,
  outOf100,
}): ReactElement => {
  const time = { value: outOf100 };
  return (
    <>
      <div className={styles.container} title="Edit timer">
        <div className={styles.singleTimerTime}>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress variant="determinate" {...time} />
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
                fontWeight="bold"
              >
                {new Date(totalTimeInSeconds * 1000)
                  .toISOString()
                  .substr(11, 8)}
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default SingleTimerInnerCircle;
