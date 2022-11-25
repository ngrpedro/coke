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
        <p>
          <a
            href="https://www.linkedin.com/in/pedro-nogueira399/"
            target={"_blank"}
          >
            Powered by:: Pedro
          </a>
        </p>
        <div className={styles.social_medias}>
          <a href="https://github.com/ngrpedro" target={"_blank"}>
            <GithubLogo size={32} color={"white"} />
          </a>

          <a
            href="https://www.linkedin.com/in/pedro-nogueira399/"
            target={"_blank"}
          >
            <LinkedinLogo size={32} color={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
