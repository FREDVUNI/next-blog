import React from "react";
import styles from "./theme.toggle.module.css";
import Image from "next/image";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="dark" width={24} height={14} />
      <Image src="/sun.png" alt="light" width={24} height={14} />
    </div>
  );
};

export default ThemeToggle;
