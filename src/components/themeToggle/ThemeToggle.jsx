"use client";

import React, { useContext } from "react";
import styles from "./theme.toggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}>
      {theme === "light" ? (
        <span className={`material-symbols-outlined ${styles.moon}`}>dark_mode</span>
      ) : (
        <span className={`material-symbols-outlined ${styles.sun}`}>light_mode</span>
      )}
    </div>
  );
};

export default ThemeToggle;
