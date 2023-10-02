import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";

const Auth = () => {
  const auth = "not-authenticateds";
  return (
    <>
      {auth === "not-authenticated" ? (
        <Link href={"/"}>Login</Link>
      ) : (
        <>
          <Link href={"/create-post"}>create post</Link>
          <span className={styles.Link}>Logout</span>
        </>
      )}
    </>
  );
};

export default Auth;
