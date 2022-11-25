import React from "react";
import styles from "./index.module.sass";

import cherry from "../../assets/Cherry.png";
import vanilla from "../../assets/Vanilla.png";
import cherryvanilla from "../../assets/CherryVanilla.png";

const index = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.texts}>
          <h1>Lorem adipisicing</h1>
        </div>
        <div className={styles.images}>
          <div className={styles.bgCherry}>
            <img src={cherry} alt="" />
          </div>
          <div className={styles.bgVanilla}>
            <img src={cherryvanilla} alt="" />
          </div>
          <div className={styles.bgCherryVanilla}>
            <img src={vanilla} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
