import React, { ReactElement } from "react";
import navStyles from "./Nav.module.css";
import AccessAlarmsOutlinedIcon from "@mui/icons-material/AccessAlarmsOutlined";
import FilterTiltShiftOutlinedIcon from "@mui/icons-material/FilterTiltShiftOutlined";
import HourglassEmptyOutlinedIcon from "@mui/icons-material/HourglassEmptyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Nav: React.FC = (): ReactElement => {
  return (
    <>
      <div className={navStyles.container}>
        <div>
          <div className={`${navStyles.navTop} ${navStyles.appTitle}`}>
            <AccessAlarmsOutlinedIcon fontSize="small" />
            <span className={navStyles.iconText}>Clock</span>
          </div>
          <div className={navStyles.navTop}>
            <FilterTiltShiftOutlinedIcon fontSize="small" />
            <span className={navStyles.iconText}>Focus sessions</span>
          </div>
          <div className={`${navStyles.navTop} ${navStyles.selected}`}>
            <HourglassEmptyOutlinedIcon fontSize="small" />
            <span className={navStyles.iconText}>Timer</span>
          </div>
          <div className={navStyles.navTop}>
            <NotificationsNoneOutlinedIcon fontSize="small" />
            <span className={navStyles.iconText}>Alarm</span>
          </div>
          <div className={navStyles.navTop}>
            <TimerOutlinedIcon fontSize="small" />
            <span className={navStyles.iconText}>Stopwatch</span>
          </div>
          <div className={navStyles.navTop}>
            <PublicOutlinedIcon fontSize="small" />
            <span className={navStyles.iconText}>World clock</span>
          </div>
        </div>
        <div>
          <div className={navStyles.navBottom}>
            <PersonOutlineOutlinedIcon fontSize="small" />
            <span className={navStyles.iconText}>Sign in</span>
          </div>
          <div className={navStyles.navBottom}>
            <SettingsOutlinedIcon fontSize="small" />
            <span className={navStyles.iconText}>Settings</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
