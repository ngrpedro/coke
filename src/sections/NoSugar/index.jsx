import React from "react";
import styles from "./index.module.sass";
import prize from "../../assets/digital-prize.png";
import bigbottle from "../../assets/big-bottle.png";
import combinedbottleprize from "../../assets/combined-bottle-prize.png";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex_container}>
        <div className={styles.bigbottle}>
          <img src={bigbottle} alt="" />
        </div>

        <div className={styles.texts}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit
            amet con ectetur olor sit amet conse cteturdo lor sit amet consectet
            ur
          </p>

          <div>
            <button>Get it now</button>
          </div>

          <div className={styles.prize}>
            <img src={prize} alt="" />
            <span>Lorem ipsum dolor, sit amet consectetur</span>
          </div>
        </div>

        <div className={styles.combinedbottleprize}>
          <span>Lorem ipsum dolor, sit amet consectetur</span>
          <img src={combinedbottleprize} alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;
