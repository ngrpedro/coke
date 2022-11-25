import React from "react";
import styles from "./index.module.sass";

const index = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <div className={styles.texts}>
            <h1>Lorem ipsum dolor sit amet </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipis icing elit. At ab
              dolorum animi deleniti facere cum
            </p>
          </div>

          <div>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
