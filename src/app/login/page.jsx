"use client";

import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";

const Loginpage = () => {
  const { data, status } = useSession();

  console.log(data);
  console.log(status);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default Loginpage;
