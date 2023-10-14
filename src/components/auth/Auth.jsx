import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";

const Auth = () => {
  const auth = "not-authenticated";
  const open = "";
  return (
    <>
      {auth === "not-authenticated" ? (
        <Link href={"/"}>Login</Link>
      ) : (
        <>
          <Link href={"/create-post"}>Post</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {auth === "not-authenticated" ? (
            <Link href={"/"}>Login</Link>
          ) : (
            <>
              <Link href={"/create-post"}>Post</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Auth;
