import React from "react";
import loopIcon from "../../assets/Icon/loop.svg";

import styles from "./Input.module.css";

export default function Input() {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        placeholder="Search this site"
        type="search"
        aria-label="Search this site"
      ></input>
      <button className={styles.inputBtn} aria-label="Submit search">
        <img src={loopIcon} alt="Search icon" />
      </button>
    </div>
  );
}
