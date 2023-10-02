import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";

const Auth = () => {
  const auth = "authenticated";
  return <div className={styles.container}>
    {
      auth === "authenticated" ? <Link href={"/"}>Login</Link>:
    }
  </div>;
};

export default Auth;
