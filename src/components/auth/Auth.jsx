import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";

const Auth = () => {
  const auth = "not-authenticated";
  return (
    <div className={styles.container}>
      {auth === "not-authenticated" ? (
        <Link href={"/"}>Login</Link>
      ) : (
        <>
          <Link href={"/create-post"}>create post</Link>
          <span className={styles.Link}>Logout</span>
        </>
      )}
    </div>
  );
};

export default Auth;
