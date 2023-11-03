import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.05.20</span>
          <span className={styles.category}> - CULTURE</span>
        </div>
        <Link href={"/"}>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
          blanditiis perspiciatis, doloremque eos voluptas consectetur laborum
          assumenda dicta vel suscipit quidem, ad quam id mollitia, possimus
          amet iusto sed voluptate.
        </p>
        <Link href={"/"} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
