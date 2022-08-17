import React, { ReactElement } from "react";
import navStyles from "./Nav.module.css";

const Nav: React.FC = (): ReactElement => {
  return (
    <>
      <div className={navStyles.container}>
        <div>
          <div className={`${navStyles.navTop} ${navStyles.appTitle}`}>
            Clock
          </div>
          <div className={navStyles.navTop}>Focus sessions</div>
          <div className={`${navStyles.navTop} ${navStyles.selected}`}>
            Timer
          </div>
          <div className={navStyles.navTop}>Alarm</div>
          <div className={navStyles.navTop}>Stopwatch</div>
          <div className={navStyles.navTop}>World clock</div>
        </div>
        <div>
          <div className={navStyles.navBottom}>Sign in</div>
          <div className={navStyles.navBottom}>Settings</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
