import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import Auth from "../auth/Auth";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          <span className="material-symbols-outlined">linked_services</span>next{" "}
          <span style={{ color: "crimson" }}>blog</span>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Auth />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
