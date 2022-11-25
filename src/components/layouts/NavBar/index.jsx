import React, { useState } from "react";
import styles from "./index.module.sass";
import logo from "../../../assets/logo_coke.svg";
import { List, X } from "phosphor-react";
import at_home from "../../../assets/at-your-home.png";

const menus = [
  { name: "Home", link: "/" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },
];

const index = () => {
  const [hamb, setHamb] = useState(false);
  console.log(hamb);
  console.log(menus);

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div>
          <img src={logo} alt="" />
        </div>

        <ul>
          {menus.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>

        <div>
          <button>Lets talk</button>
        </div>

        <div className={styles.hamb} onClick={() => setHamb(!hamb)}>
          <List size={22} />
        </div>

        {hamb && (
          <div className={styles.hambMenu}>
            <div>
              <div className={styles.hambMenu_header}>
                <div>
                  <img src={logo} alt="" />
                </div>

                <div>
                  <button>Lets talk</button>
                </div>

                <div className={styles.hambMenu_icon}>
                  <X size={22} onClick={() => setHamb(!hamb)} />
                </div>
              </div>

              <div className={styles.listMenu}>
                {menus.map((item) => (
                  <div key={item.name}>{item.name}</div>
                ))}
              </div>
            </div>

            <div className={styles.hambMenu_image}>
              <img src={at_home} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
