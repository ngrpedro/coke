import React from "react";
import styles from "./index.module.sass";
import { GithubLogo } from "phosphor-react";
import { LinkedinLogo } from "phosphor-react";
import logo from "../../../assets/logo_coke.svg";

const index = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div>
          <img src={logo} alt="" />
        </div>

        <div className={styles.social_medias}>
          <a href="">
            <GithubLogo size={32} color={"white"} />
          </a>

          <a href="">
            <LinkedinLogo size={32} color={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
