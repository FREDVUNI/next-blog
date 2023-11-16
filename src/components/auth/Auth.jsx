import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";

const Auth = () => {
  const auth = "not-authenticated";
  const open = "";
  return (
    <>
      {auth === "not-authenticated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <>
          <Link href={"/create-post"}>Post</Link>
          <Link href={"/logout"} className={styles.link}>Logout</Link>
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
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {auth === "not-authenticated" ? (
            <Link href={"/login"}>Login</Link>
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
