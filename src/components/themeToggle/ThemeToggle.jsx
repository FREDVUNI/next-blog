"use client";

import React, { useContext } from "react";
import styles from "./theme.toggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}>
      {theme === "light" ? (
        <Image
          src="/moon.png"
          alt="dark"
          width={24}
          height={14}
          className={styles.moon}
        />
      ) : (
        <Image
          src="/sun.png"
          alt="light"
          width={24}
          height={14}
          className={styles.sun}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
