import React, { ReactElement } from "react";

//icons
import Clock from "@mui/icons-material/AccessAlarmsOutlined";
import Focus from "@mui/icons-material/FilterTiltShiftOutlined";
import Hourglass from "@mui/icons-material/HourglassEmptyOutlined";
import Alarm from "@mui/icons-material/NotificationsNoneOutlined";
import Stopwatch from "@mui/icons-material/TimerOutlined";
import World from "@mui/icons-material/PublicOutlined";
import SignIn from "@mui/icons-material/PersonOutlineOutlined";
import Settings from "@mui/icons-material/SettingsOutlined";

//styles
import styles from "./Nav.module.css";

//nav items are not selectable, this is the timer app ONLY

const Nav: React.FC = (): ReactElement => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={`${styles.navTop} ${styles.appTitle}`}>
            <Clock fontSize="small" />
            <span className={styles.iconText}>Clock</span>
          </div>
          <div className={styles.navTop}>
            <Focus fontSize="small" />
            <span className={styles.iconText}>Focus sessions</span>
          </div>
          <div
            data-testid="selected-nav-item"
            className={`${styles.navTop} ${styles.selected}`}
          >
            <Hourglass fontSize="small" />
            <span className={styles.iconText}>Timer</span>
          </div>
          <div className={styles.navTop}>
            <Alarm fontSize="small" />
            <span className={styles.iconText}>Alarm</span>
          </div>
          <div className={styles.navTop}>
            <Stopwatch fontSize="small" />
            <span className={styles.iconText}>Stopwatch</span>
          </div>
          <div className={styles.navTop}>
            <World fontSize="small" />
            <span className={styles.iconText}>World clock</span>
          </div>
        </div>
        <div>
          <div className={styles.navBottom}>
            <SignIn fontSize="small" />
            <span className={styles.iconText}>Sign in</span>
          </div>
          <div className={styles.navBottom}>
            <Settings fontSize="small" />
            <span className={styles.iconText}>Settings</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
