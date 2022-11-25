import React from "react";
import styles from "./index.module.sass";

import nosugar from "../../assets/icons/no-sugar-banner.png";
import logoball from "../../assets/icons/logoball.png";
import home from "../../assets/icons/at-your-home-title.png";
import truck from "../../assets/icons/truck.png";
import studio from "../../assets/icons/Coke Studio Logo_Desktop 1.png";

const index = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={nosugar} alt="" />
      </div>

      <div>
        <img src={logoball} alt="" />
      </div>

      <div>
        <img src={home} alt="" />
      </div>

      <div>
        <img src={truck} alt="" />
      </div>

      <div>
        <img src={studio} alt="" />
      </div>
    </div>
  );
};

export default index;
