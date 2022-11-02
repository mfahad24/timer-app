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

interface NavProps {
  fullView: boolean;
}

const Nav: React.FC<NavProps> = ({ fullView }): ReactElement => {
  return (
    <>
      <div
        className={`${styles.container} ${
          fullView === true ? `${styles.containerHidden}` : ""
        }`}
      >
        <div>
          <div className={`${styles.navTop} ${styles.appTitle}`}>
            <Clock fontSize="small" />
            <span className={styles.iconText}>Clock</span>
          </div>
          <div className={styles.navTop}>
            <Focus fontSize="small" />
            <span className={styles.iconText} title="Visual only">Focus sessions</span>
          </div>
          <div
            data-testid="selected-nav-item"
            className={`${styles.navTop} ${styles.selected}`}
          >
            <Hourglass fontSize="small" />
            <span className={styles.iconText} title="Visual only">Timer</span>
          </div>
          <div className={styles.navTop}>
            <Alarm fontSize="small" />
            <span className={styles.iconText} title="Visual only">Alarm</span>
          </div>
          <div className={styles.navTop}>
            <Stopwatch fontSize="small" />
            <span className={styles.iconText} title="Visual only">Stopwatch</span>
          </div>
          <div className={styles.navTop}>
            <World fontSize="small" />
            <span className={styles.iconText} title="Visual only">World clock</span>
          </div>
        </div>
        <div>
          <div className={styles.navBottom}>
            <SignIn fontSize="small" />
            <span className={styles.iconText} title="Visual only">Sign in</span>
          </div>
          <div className={styles.navBottom}>
            <Settings fontSize="small" />
            <span className={styles.iconText} title="Visual only">Settings</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
