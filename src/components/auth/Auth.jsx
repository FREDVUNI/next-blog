"use client";

import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { status } = useSession();
  const open = "";
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <>
          <Link href={"/write"}>Post</Link>
          <span onClick={() => signOut} className={styles.link}>
            Logout
          </span>
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
          {status === "unauthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Post</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Auth;
