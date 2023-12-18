import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { makeUpperCase, shortenDesc } from "@/utils";

const Card = ({ key, title, desc, img, cat }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src={img} alt="post" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.05.20</span>
          <span className={styles.category}> - {makeUpperCase(cat)}</span>
        </div>
        <Link href={"/"}>
          <h2>{title}</h2>
        </Link>
        <p className={styles.desc}>{shortenDesc(desc, 250)}</p>
        <Link href={"/"} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
